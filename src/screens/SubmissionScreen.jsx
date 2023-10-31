import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import PageBar from "../components/PageBar.jsx";
import CheckListItemFull from "../components/CheckListItemFull.jsx";
import TitleBold from "../components/TitleBold.jsx";
import TextareaAutosize from "react-textarea-autosize";
import { submitProject } from "../utils/submitProject.js";
import { UserAuth } from "../context/AuthContext.jsx";
import InfoModal from "../components/InfoModal.jsx";

function SubmissionScreen() {
  const { id } = useParams();
  const { user } = UserAuth();
  const navigate = useNavigate();
  const [githubLink, setGithubLink] = useState("");
  const [conclusion, setConclusion] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isTaskOutcomeAchieved, setIsTaskOutcomeAchieved] = useState(false);
  const [isGithubRepoCreated, setIsGithubRepoCreated] = useState(false);
  const [isSharedOnLinkedIn, setIsSharedOnLinkedIn] = useState(false);

  const isAllFieldsComplete =
    githubLink &&
    conclusion &&
    isTaskOutcomeAchieved &&
    isGithubRepoCreated &&
    isSharedOnLinkedIn;

  const handleCheckedChange = (item, newState) => {
    switch (item) {
      case "TaskOutcome":
        setIsTaskOutcomeAchieved(newState);
        break;
      case "GithubRepo":
        setIsGithubRepoCreated(newState);
        break;
      case "LinkedInShare":
        setIsSharedOnLinkedIn(newState);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    if (isSubmitting) {
      // Delay navigation by 2000ms
      const timeoutId = setTimeout(() => {
        navigate("/home");
        setIsSubmitting(false); // Reset isSubmitting after navigation
      }, 2000);

      // Clean up the timeout if the component is unmounted before the timeout fires
      return () => clearTimeout(timeoutId);
    }
  }, [isSubmitting, navigate]);

  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
      const projectId = id;
      const currentDate = new Date();
      await submitProject(
        user.uid,
        projectId,
        githubLink,
        conclusion,
        currentDate
      );
    } catch (error) {
      console.error("Error submitting project:", error);
      setIsSubmitting(false); // Reset isSubmitting on error
    }
  };

  return (
    <div>
      <PageBar title="Submit Project" />
      <InfoModal
        infoTitle={"SUCCESS"}
        isOpen={isSubmitting}
        infoMessage={"Project Submitted Successfully!"}
      />
      <div className="flex flex-col items-center">
        <div className="w-full max-w-[1500px]">
          <div className="h-screen pt-[4rem] pb-[4rem]">
            <div className="mx-m-15 ">
              <TitleBold text="CHECKLIST" />
              <CheckListItemFull
                text="Task outcome achieved"
                isChecked={isTaskOutcomeAchieved}
                onCheckedChange={(newState) =>
                  handleCheckedChange("TaskOutcome", newState)
                }
              />
              <CheckListItemFull
                text="Github repository created"
                isChecked={isGithubRepoCreated}
                onCheckedChange={(newState) =>
                  handleCheckedChange("GithubRepo", newState)
                }
              />
              <CheckListItemFull
                text="Shared on LinkedIn"
                isChecked={isSharedOnLinkedIn}
                onCheckedChange={(newState) =>
                  handleCheckedChange("LinkedInShare", newState)
                }
              />
              <TitleBold text="GITHUB LINK" />
              <input
                maxLength="50"
                placeholder="Enter the github Link here"
                type="text"
                value={conclusion}
                onChange={(e) => setConclusion(e.target.value)}
                className=" flex w-full rounded-lg bg-white px-s-15  py-s-17 font-lexend text-label  "
              ></input>

              <TitleBold text="CONCLUSION" />
              <TextareaAutosize
                minRows={2}
                maxRows={10}
                maxLength="1000"
                placeholder="Write your conclusion"
                value={githubLink}
                onChange={(e) => setGithubLink(e.target.value)}
                className=" flex w-full rounded-lg bg-white px-s-15  py-s-17 font-lexend text-label  "
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex fixed bottom-0 w-full bg-white justify-center py-s-15">
        <button
          onClick={handleSubmit}
          disabled={!isAllFieldsComplete || isSubmitting}
          className={`max-w-md mx-m-10 text-black flex flex-grow text-label font-lexend font-label ${
            isAllFieldsComplete ? "bg-[#219653]" : "bg-gray-300"
          } text-center text-white rounded-full py-s-15`}
        >
          <p className=" text-white text-center w-full">Submit Project</p>
        </button>
      </div>
    </div>
  );
}

export default SubmissionScreen;
