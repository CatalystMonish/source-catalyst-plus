import React, { useEffect, useState } from "react";
import { getDownloadURL, ref } from "firebase/storage";
import { doc, getDoc } from "firebase/firestore";
import { db, storage } from "../firebase";

function SkillPill({ skillId }) {
  const [skill, setSkill] = useState({});
  const [imageURL, setImageURL] = useState(null);

  useEffect(() => {
    const fetchSkillData = async () => {
      try {
        const skillDoc = await getDoc(doc(db, "skills", skillId));
        if (skillDoc.exists) {
          const skillData = skillDoc.data();
          setSkill(skillData);

          if (skillData.skillImage) {
            const url = await getDownloadURL(
              ref(storage, skillData.skillImage)
            );
            setImageURL(url);
          }
        }
      } catch (error) {
        console.error("Error fetching skill data:", error);
      }
    };

    fetchSkillData();
  }, [skillId]);

  return (
    <div className="flex w-fit items-center rounded-full bg-light p-[0.3125rem]">
      {imageURL && (
        <img
          alt={skill.skillName}
          src={imageURL}
          className="h-[1.25rem] w-[1.25rem] rounded-full"
        />
      )}
      <p className="ml-[0.3125rem] font-lexend text-small font-small">
        {skill.skillName}
      </p>
    </div>
  );
}

export default SkillPill;
