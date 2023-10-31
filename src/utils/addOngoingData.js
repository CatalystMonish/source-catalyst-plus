import { db } from "../firebase";
import { doc, setDoc, getDocs, collection } from "firebase/firestore";

export const addOngoingData = async (uid, projectID) => {
  try {
    const ongoingCollectionRef = collection(db, `users/${uid}/ongoing`);
    const ongoingSnapshot = await getDocs(ongoingCollectionRef);

    if (ongoingSnapshot.size >= 1) {
      console.log("You need to complete the previous project.");
    } else {
      const ongoingRef = doc(db, `users/${uid}/ongoing/${projectID}`);
      await setDoc(ongoingRef, { id: projectID });
      console.log("Data added successfully.");
    }
  } catch (error) {
    console.error("Error adding data: ", error);
    throw error;
  }
};
