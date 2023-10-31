import React, { useEffect, useState } from "react";
import PageBar from "../components/PageBar.jsx";
import { UserAuth } from "../context/AuthContext.jsx";
import profile from "../images/monish.jpg";
import TitleBold from "../components/TitleBold.jsx";
import SkillCard from "../components/SkillCard.jsx";
import { getProfileData } from "../utils/getProfileData.js";
import LoadingModal from "../components/LoadingModal.jsx"; // Assume this is the correct import

function ProfileScreen() {
  const { user } = UserAuth();
  const [profileData, setProfileData] = useState(null);
  const [isLoading, setIsLoading] = useState(true); // Create a state variable to manage loading state

  useEffect(() => {
    if (user) {
      getProfileData(user.uid).then((data) => {
        setProfileData(data);
        setIsLoading(false); // Set isLoading to false once data is fetched
      });
    } else {
      setIsLoading(false); // Set isLoading to false if there is no user
    }
  }, [user]);

  useEffect(() => {
    if (profileData) {
      console.log("PROFILE", profileData.skillIds);
    }
  }, [profileData]);

  if (isLoading) {
    return <LoadingModal isOpen={isLoading} />; // Show loading modal while data is being fetched
  }

  return (
    <div>
      <PageBar title={profileData ? profileData.displayName : "Profile"} />
      <div className="flex flex-col items-center">
        <div className="w-full max-w-[1500px]">
          <div className="h-screen pt-[4rem] pb-[4rem]">
            <div className="mx-m-15 ">
              <div className="flex bg-white flex-row rounded-[10px] items-center p-s-15 mt-m-20">
                <img
                  className="w-[6.25rem] h-[6.25rem] rounded-full"
                  src={profileData ? profileData.photoURL : profile}
                />
                <div className="flex flex-col ml-m-15">
                  <p className="text-title font-title font-lexend">
                    {profileData ? profileData.displayName : ""}
                  </p>
                  <p className="text-content-body font-content-body text-text-light font-lexend">
                    {profileData ? profileData.bio : ""}
                  </p>
                </div>
              </div>
              <TitleBold text="SKILLS" />
              <div className="flex flex-wrap gap-s-15 mb-m-10 mt-m-10">
                {profileData &&
                  profileData.skillIds &&
                  profileData.skillIds.map((skillId, index) => (
                    <SkillCard key={index} skillId={skillId} />
                  ))}
              </div>

              <TitleBold text="PROJECTS" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileScreen;
