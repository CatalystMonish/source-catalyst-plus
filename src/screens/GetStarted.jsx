import React from 'react'
import ProgressBar from "@ramonak/react-progress-bar";
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import started_1 from "../images/started_1.png"
import started_2 from "../images/started_2.png"
import started_3 from "../images/started_3.png"
import started_4 from "../images/started_4.png"
import { motion, AnimatePresence } from "framer-motion";


function GetStarted() {
  const navigate = useNavigate();
  const goBack = () => {
    navigate("/welcome"); // Go back one step in history
  };

  const [currentSlide, setCurrentSlide] = useState(1); // initialize slide to 1

  const images = [
      started_1,
      started_2,
      started_3,
      started_4
  ];
  const texts = [
    "Project based Learning, at your fingertips",
    "Select a project from our extensive library",
    "Complete tasks gain EXP points", 
    "Projects give you skills on your profile, add them to your resume"
];

const navigateNext = () => {
  if (currentSlide < 4) {
      setCurrentSlide(prevSlide => prevSlide + 1);
  } else {
      navigate("/home");
  }
};

const containerVariants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
  exit: {
    opacity: 0,
    x: -50,
    transition: {
      duration: 0.5,
    },
  },
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
          completed={25 * currentSlide}
          height="0.3125rem"
          isLabelVisible={false}
          bgColor="#2E7CF6"
          borderRadius={0}
          maxCompleted={100}
        />
      </div>
      {/* show this div 4 times then make it disappear */}
      <div className="flex flex-col items-center justify-center w-full mx-m-20 ">
      <AnimatePresence mode="wait">
  <motion.img
    key={currentSlide}
    className=" w-full h-1/2 rounded-lg bg-white max-w-xl mt-auto"
    src={images[currentSlide - 1]}
    initial="hidden"
    animate="visible"
    exit="exit"
    variants={containerVariants}
  />
</AnimatePresence>
<AnimatePresence mode="wait">
  <motion.p
    key={currentSlide}
    className="mt-m-20 font-lexend text-title font-title text-black"
    initial="hidden"
    animate="visible"
    exit="exit"
    variants={containerVariants}
  >
    {texts[currentSlide - 1]}
  </motion.p>
</AnimatePresence>
      </div>
      <div
      onClick={navigateNext}
      className="fixed bottom-10 right-4 rounded-full bg-primary p-4 text-white shadow-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
    >
               <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-[1.5rem] w-[1.5rem] rotate-180"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"
            />
          </svg>
    </div>
    </div>

  )
}

export default GetStarted;