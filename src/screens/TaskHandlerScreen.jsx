import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import MCQCard from "../components/MCQCard.jsx";
import PhotoTextCard from "../components/PhotoTextCard.jsx";
import CodeCard from "../components/CodeCard.jsx";
import HydroFloaty from "../hydro/HydroFloaty.jsx";
import hydro_love from "../images/hydro/hydro_love.png";

function TaskHandlerScreen() {
  const navigate = useNavigate();
  const [sarcasm, setSarcasm] = useState("");
  const [isTaskComplete, setIsTaskComplete] = useState(false);

  useEffect(() => {
    const sarcasticReplies = [
      "What did you expect here? Answers?",
      "Ah, the moment of truth... or wild guessing.",
      "Sure, just tap. It's not like it's important or anything.",
      "Pick one, it's only your grade at stake.",
      "Eeny, meeny, miney, wrong?",
      "Just another click in the sea of clicks.",
      "Spoiler alert: They're not all correct.",
      "Take a wild guess, Einstein.",
      "Choose wisely, or just choose.",
      "This button is as good as any other, right?",
    ];
    setSarcasm(
      sarcasticReplies[Math.floor(Math.random() * sarcasticReplies.length)]
    );
  }, []);
  const goHome = () => {
    navigate("/home");
  };
  const goBack = () => {
    navigate("/"); // Go back to the home page
  };
  const completeTask = () => {
    setIsTaskComplete(true);
  };
  if (isTaskComplete) {
    return (
      <div className="flex flex-col items-center ">
        <div className="w-full max-w-[1500px]">
          <div className="h-screen pt-[4rem] pb-[4rem] flex items-center justify-center">
            <div className="mx-m-15  flex flex-col items-center">
              <img src={hydro_love} className="w-[6.25rem] h-[6.25rem] " />
              <p className="text-heading font-heading font-lexend mt-m-15">
                Task Complete
              </p>
              <p className="mt-[5rem] text-text-light text-section-head font-lexend font-section-head">
                TOTAL XP
              </p>
              <p className="text-title font-title font-lexend">+50</p>
            </div>
          </div>
        </div>
        <div className="flex w-full bottom-0 fixed bg-light justify-center py-s-15">
          <button
            onClick={goHome}
            className="w-full max-w-md mx-m-15 max-w-screen mx-m-1  bg-primary py-s-15 text-white text-label font-label font-lexend rounded-[10px]"
          >
            Continue
          </button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="fixed top-0 z-10 flex h-[4rem] w-full flex-row items-center bg-white font-lexend text-heading font-heading shadow-md">
        <svg
          onClick={goBack}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="ml-m-15 h-[1.5rem] w-[1.5rem]"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"
          />
        </svg>

        <p className="ml-m-10 font-lexend text-heading font-heading">Task</p>

        <p className="mr-m-15 ml-auto font-lexend text-label font-label">1/2</p>
      </div>
      <div className="flex flex-col items-center ">
        <div className="w-full max-w-[1500px]">
          <div className="h-screen pt-[4rem] pb-[4rem] flex items-center justify-center">
            <div className="mx-m-15">
              <MCQCard />
              {/*<CodeCard />*/}
            </div>
          </div>
        </div>
      </div>
      <div className="flex fixed bottom-0 w-full bg-white justify-center py-s-15">
        <button className=" max-w-md mx-m-10 text-black flex flex-grow text-label font-lexend font-label bg-[#F3F3F3] text-center text-white  rounded-full py-s-15 ">
          <p className=" text-black text-center w-full">Go Back</p>
        </button>
        <button
          onClick={completeTask}
          className="max-w-md mr-m-10 flex flex-grow text-label font-lexend font-label bg-primary text-white text-center  rounded-full py-s-15 "
        >
          <p className=" text-center w-full"> Next</p>
        </button>
      </div>
      <HydroFloaty message={sarcasm} position="left-bottom" />
    </div>
  );
}

export default TaskHandlerScreen;
