import React, { createContext, useContext, useEffect, useState } from "react";
import { getStorage, ref, uploadBytes } from "firebase/storage";
import { FirebaseAuthentication } from '@capacitor-firebase/authentication';
import {
    signInWithCredential,
    GoogleAuthProvider,
    onAuthStateChanged,
    signOut
} from 'firebase/auth';
import { doc, getDoc, setDoc } from "firebase/firestore";
import { FirebaseFirestore } from '@capacitor-firebase/firestore';
import { db, getFirebaseAuth } from "../firebase";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [auth, setAuth] = useState(null);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchAuthInstance = async () => {
            const firebaseAuth = await getFirebaseAuth();
            setAuth(firebaseAuth);
        };
        fetchAuthInstance();
    }, []);

    const googleSignIn = async () => {
        if (!auth) return;
        const result = await FirebaseAuthentication.signInWithGoogle();
        const credential = GoogleAuthProvider.credential(result.credential?.idToken);
        await signInWithCredential(auth, credential);
    };

    const logOut = () => {
        if (!auth) return;
        signOut(auth);
    };

    const checkAndCreateUserDoc = async (currentUser) => {
        const userRef = `users/${currentUser.uid}`;

        const { snapshot } = await FirebaseFirestore.getDocument({
            reference: userRef
        });

        if (!snapshot.exists) {
            const { displayName, email, photoURL, emailVerified } = currentUser;

            await FirebaseFirestore.setDocument({
                reference: userRef,
                data: {
                    displayName,
                    email,
                    photoURL,
                    emailVerified
                },
                merge: true
            });
        }
    };

    const uploadFileToStorage = async (file) => {
        if (!file || !auth) {
            alert("No file selected or not authenticated.");
            return;
        }

        const storage = getStorage();
        const storageRef = ref(storage, `users/${user.uid}/resume/${file.name}`);

        try {
            await uploadBytes(storageRef, file);
            alert("File uploaded successfully");
        } catch (error) {
            alert("An error occurred while uploading the file");
        }
    };

    useEffect(() => {
        if (!auth) return;

        const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
            setUser(currentUser);
            if (currentUser) {
                await checkAndCreateUserDoc(currentUser);
            }
        });

        return () => {
            unsubscribe();
        };
    }, [auth]);

    return (
        <AuthContext.Provider
            value={{ googleSignIn, logOut, user, uploadFileToStorage }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export const UserAuth = () => {
    return useContext(AuthContext);
};
