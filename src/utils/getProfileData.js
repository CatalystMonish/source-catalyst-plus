import { db, storage } from "../firebase.js";
import { doc, getDoc, collection, getDocs } from "firebase/firestore";
import { ref, getDownloadURL } from "firebase/storage";

export const getProfileData = async (uid) => {
  try {
    const profileRef = doc(db, "users", uid);
    const profileSnapshot = await getDoc(profileRef);

    if (profileSnapshot.exists) {
      const profileData = profileSnapshot.data();

      const skillsRef = collection(db, "users", uid, "skills");
      const skillsSnapshot = await getDocs(skillsRef);
      const skillIds = skillsSnapshot.docs.map((skillDoc) => skillDoc.id);

      return {
        ...profileData,
        skillIds: skillIds,
      };
    } else {
      console.error("No user found with the given UID.");
      return null;
    }
  } catch (error) {
    console.error("Error fetching user profile:", error);
    return null;
  }
};

export const fetchUserIds = async () => {
  try {
    const usersRef = collection(db, "users");
    const snapshot = await getDocs(usersRef);
    const userIds = snapshot.docs.map((doc) => doc.id);
    return userIds;
  } catch (error) {
    console.error("Error fetching user IDs: ", error);
    throw error;
  }
};
