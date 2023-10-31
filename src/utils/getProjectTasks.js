import { db, storage } from "../firebase.js";
import { doc, getDocs, getDoc, collection } from "firebase/firestore";
import { ref, getDownloadURL } from "firebase/storage";

export const getProjectTasks = async (projectId) => {
  try {
    // Reference to the tasks sub-collection under the specified project
    const tasksCollectionRef = collection(db, `projects/${projectId}/tasks`);
    const tasksSnapshot = await getDocs(tasksCollectionRef);

    if (!tasksSnapshot.empty) {
      // Map over the snapshot documents, extract data and taskNumber field
      const tasksData = tasksSnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id, // Store document id if needed
      }));

      // Sort tasks based on taskNumber in ascending order
      tasksData.sort((a, b) => parseInt(a.taskNumber) - parseInt(b.taskNumber));

      return tasksData;
    } else {
      console.error("No tasks found for the given project ID.");
      return [];
    }
  } catch (error) {
    console.error("Error fetching project tasks:", error);
    throw error; // Re-throwing the error to be caught and handled in the component
  }
};
