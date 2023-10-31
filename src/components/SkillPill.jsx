import React, { useEffect, useState } from "react";
import { db, storage } from "../firebase.js";
import { doc, getDoc } from "firebase/firestore"; // Import doc and getDoc
import { ref, getDownloadURL } from "firebase/storage";

function SkillPill({ skillId, bgColor = "light" }) {
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
  }, [skillId]);

  var imgBg = "light";
  if (bgColor == "light") {
    imgBg = "white";
  }

  return (
    <div className="flex-shrink-0">
      <div
        className={`flex flex-shrink-0 items-center rounded-full bg-${bgColor} py-[0.1875rem] pr-[0.5rem] pl-[0.1875rem] `}
      >
        <div className="flex-shrink-0">
          {imageURL ? (
            <img
              src={imageURL}
              className={`h-[1.25rem] w-[1.25rem] rounded-full bg-${imgBg} p-[0.125rem]`}
              alt=""
            />
          ) : (
            <div className="h-[1.25rem] w-[1.25rem] rounded-full bg-white"></div>
          )}
        </div>
        <div className="flex ml-[0.3125rem]">
          <p className="font-lexend text-small font-small whitespace-nowrap overflow-hidden">
            {skill.skillName}
          </p>
        </div>
      </div>
    </div>
  );
}

export default SkillPill;
