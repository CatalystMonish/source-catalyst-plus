import { db, storage } from "../firebase.js";
import { doc, getDocs, getDoc, collection } from "firebase/firestore";
import { ref, getDownloadURL } from "firebase/storage";

export const getProjectData = async (id) => {
  try {
    const projectRef = doc(db, "projects", id);
    const projectSnapshot = await getDoc(projectRef);

    if (projectSnapshot.exists) {
      const projectData = projectSnapshot.data();

      let thumbnailURL;
      if (projectData.projectThumbnail) {
        thumbnailURL = await getDownloadURL(
          ref(storage, projectData.projectThumbnail)
        );
      }

      const skillIds = projectData.skills
        ? projectData.skills.map((skillRef) => skillRef.id)
        : []; // Ensure we check if skills exist before mapping

      return {
        ...projectData,
        thumbnail: thumbnailURL,
        skillIds: skillIds,
      };
    } else {
      console.error("No project found with the given ID.");
      return null;
    }
  } catch (error) {
    console.error("Error fetching project details:", error);
    return null;
  }
};

export const fetchProjectIds = async () => {
  try {
    const projectsRef = collection(db, "projects");
    const snapshot = await getDocs(projectsRef);
    const projectIds = snapshot.docs.map((doc) => doc.id);
    return projectIds;
  } catch (error) {
    console.error("Error fetching project IDs: ", error);
    throw error;
  }
};
