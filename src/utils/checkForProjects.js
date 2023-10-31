import { db } from "../firebase.js";
import { doc, getDocs, getDoc, collection } from "firebase/firestore";
import { getProjectData } from "../utils/getProjectData.js"; // Adjust the import to your file structure

export const checkForProjects = async (user, setIsLoading, setId) => {
  if (user) {
    setIsLoading(true);
    try {
      const ongoingCollectionRef = collection(db, `users/${user.uid}/ongoing`);
      const ongoingSnapshot = await getDocs(ongoingCollectionRef);

      if (!ongoingSnapshot.empty) {
        const firstDoc = ongoingSnapshot.docs[0];
        setId(firstDoc.id);
        return true; // Projects found
      } else {
        console.log("No ongoing projects found.");
        return false; // No projects found
      }
    } catch (error) {
      console.error("Error fetching data: ", error);
      throw error;
    }
  }
};

export const fetchProjectDetails = async (
  id,
  user,
  setProject,
  setCurrentTaskNumber
) => {
  if (id) {
    const data = await getProjectData(id);
    setProject(data);

    const ongoingRef = doc(db, `users/${user.uid}/ongoing/${id}`);
    const ongoingDoc = await getDoc(ongoingRef);

    if (ongoingDoc.exists() && ongoingDoc.data().completed != null) {
      setCurrentTaskNumber(ongoingDoc.data().completed + 1);
    } else {
      setCurrentTaskNumber(1);
    }
  }
};
