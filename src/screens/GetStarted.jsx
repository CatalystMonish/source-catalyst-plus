import React from 'react'
import ProgressBar from "@ramonak/react-progress-bar";
import FloatingActionButton from "../components/FloatingActionButton";
import { useNavigate } from "react-router-dom";

function GetStarted() {
  const navigate = useNavigate();
  const goBack = () => {
    navigate("/welcome"); // Go back one step in history
  };
  return (
    <div className="flex h-screen items-center justify-center bg-light">
      <div className="fixed top-0 z-10 flex h-[4rem]  w-screen flex-col items-center  bg-white font-lexend text-heading font-heading shadow-md">
        <div className="flex w-full flex-grow flex-row items-center">
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

          <p className="ml-m-10 font-lexend text-heading font-heading">
            What is Source Catalyst?
          </p>
        </div>
      <ProgressBar
          className="w-screen"
          completed={20}
          height="0.3125rem"
          isLabelVisible={false}
          bgColor="#219653"
          maxCompleted={100}
        />
      </div>
      {/* show this div 4 times then make it disappear */}
      <div className="flex flex-col items-center justify-center w-full mx-m-20 ">
        <img
          className="h-[500px] w-full rounded-lg bg-white"

        />

        <p className="mt-m-20 font-lexend text-content font-content text-black">
          Choose a Project from our library!
        </p>
      </div>
<FloatingActionButton/>
    </div>

  )
}

export default GetStarted;