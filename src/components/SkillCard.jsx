import React, { useEffect, useState } from "react";
import { db, storage } from "../firebase.js";
import { doc, getDoc } from "firebase/firestore";
import { ref, getDownloadURL } from "firebase/storage";

function SkillCard({ skillId }) {
  // Make sure to accept skillId as a prop
  const [skill, setSkill] = useState({});
  const [imageURL, setImageURL] = useState(null);

  useEffect(() => {
    const fetchSkillData = async () => {
      try {
        const skillRef = doc(db, "skills", skillId);
        const skillSnapshot = await getDoc(skillRef);

        if (skillSnapshot.exists) {
          const skillData = skillSnapshot.data();
          setSkill(skillData);
          console.log("CARD", skillData);

          if (skillData.skillImage) {
            const storageRef = ref(storage, skillData.skillImage);
            const url = await getDownloadURL(storageRef);
            setImageURL(url);
          }
        } else {
          console.error("No skill found with the given ID.");
        }
      } catch (error) {
        console.error("Error fetching skill data:", error);
      }
    };

    fetchSkillData();
  }, [skillId]); // Depend on skillId to re-run effect when skillId changes

  return (
    <div className="flex flex-col w-fit items-center">
      <div className="w-[5.625rem] h-[5.625rem] p-4 bg-white rounded-full flex ">
        {imageURL ? (
          <img src={imageURL} className="object-contain w-full h-full" alt="" />
        ) : (
          <div className="w-full h-full bg-gray-200"></div> // Placeholder for when image is not loaded
        )}
      </div>
      <p className="text-label font-lexend font-label text-center flex flex-col mt-m-5">
        {skill.skillName
          ? skill.skillName
              .split(" ")
              .map((word, index) => <span key={index}>{word}</span>)
          : null}
      </p>
    </div>
  );
}

export default SkillCard;
