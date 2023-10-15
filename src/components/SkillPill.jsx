import React, { useEffect, useState } from "react";
import { FirebaseFirestore } from '@capacitor-firebase/firestore';
import { storage } from '../firebase.js';  // Adjust the path to your Firebase config file
import { ref, getDownloadURL } from 'firebase/storage';  // Import ref and getDownloadURL
import logo from "../images/logo.png";

function SkillPill({ skillId }) {
  const [skill, setSkill] = useState({});
  const [imageURL, setImageURL] = useState(null);

  useEffect(() => {
    const fetchSkillData = async () => {
      try {
        const { snapshot } = await FirebaseFirestore.getDocument({
          reference: `skills/${skillId}`
        });

        const skillData = snapshot.data;  // Assuming data will always be present
        setSkill(skillData);

        if (skillData.skillImage) {
          const storageRef = ref(storage, skillData.skillImage);
          const url = await getDownloadURL(storageRef);
          setImageURL(url);
        }
      } catch (error) {
        console.error("Error fetching skill data:", error);
      }
    };

    fetchSkillData();
  }, [skillId]);

  return (
      <div className="flex w-fit items-center rounded-full bg-light py-[0.1875rem] pr-[0.5rem] px-[0.1875rem]">
        {imageURL && (
            <img
                width="20"
                height="20"
                placeholder={logo}
                src={imageURL}
                className="h-[1.25rem] w-[1.25rem] rounded-full bg-white"
            />
        )}
        <p className="ml-[0.3125rem] font-lexend text-small font-small">
          {skill.skillName}
        </p>
      </div>
  );
}

export default SkillPill;
