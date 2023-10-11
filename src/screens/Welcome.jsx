import React from "react";
import { useNavigate } from 'react-router-dom';

function Welcome() {

  
  const navigate = useNavigate();

  const goStarted = async () => {
    navigate("/started");
  };

  return (
    <div className="bg-primary flex justify-center h-screen">
      <div className="mt-auto w-full mx-m-20 mb-[1.5625rem]">
        <p className="font-lexend text-[1.875rem] text-white">
          Welcome to
        </p>
        <p className="font-lexend text-[1.875rem] text-white mb-10">
          Source Catalyst
        </p>
        <div onClick={goStarted} className=" flex justify-end">
          <div className=" bg-white w-fit px-s-15 py-s-10 rounded-full flex">
          <p className="font-lexend text-label font-label">Get Started</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-[1.5rem] h-[1.5rem] ml-[0.4375rem]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
            />
          </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
