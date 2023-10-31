// submitProject.js
import { db } from "../firebase";
import {
  doc,
  setDoc,
  deleteDoc,
  getDoc,
  collection,
  addDoc,
} from "firebase/firestore"; // Import additional necessary functions
import { format } from "date-fns";

export const submitProject = async (uid, projectId, githubLink, conclusion) => {
  try {
    // Define the path where the new data will be saved
    const submittedDataRef = doc(db, `users/${uid}/submitted/${projectId}`);

    // Prepare the data object
    const data = {
      githubLink,
      conclusion,
      date: format(new Date(), "dd/MM/yyyy"),
    };

    // Save the new data to Firestore
    await setDoc(submittedDataRef, data);

    // Fetch the project data to get the skills
    const projectRef = doc(db, "projects", projectId);
    const projectSnapshot = await getDoc(projectRef);
    if (projectSnapshot.exists) {
      const projectData = projectSnapshot.data();
      const skillIds = projectData.skills
        ? projectData.skills.map((skillRef) => skillRef.id)
        : [];

      // If there are skills, add them to the user's skills collection
      if (skillIds.length > 0) {
        const userSkillsRef = collection(db, `users/${uid}/skills`);
        for (let skillId of skillIds) {
          const newSkillRef = doc(userSkillsRef, skillId); // Assuming skillId can be used as document ID
          await setDoc(newSkillRef, { id: skillId }); // Assuming this is the structure you want
        }
      }
    } else {
      console.error("No project found with the given ID.");
    }

    // Define the path of the document to be deleted
    const ongoingProjectRef = doc(db, `users/${uid}/ongoing/${projectId}`);

    // Delete the document from Firestore
    await deleteDoc(ongoingProjectRef);

    console.log(
      "Project submitted, skills added, and ongoing project deleted successfully."
    );
  } catch (error) {
    console.error("Error submitting project: ", error);
    throw error;
  }
};
