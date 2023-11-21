import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import hydro from "../images/hydro/hydro_main.png";
import Typewriter from "typewriter-effect";
import { NativeAudio } from "@capacitor-community/native-audio";
import { Haptics, ImpactStyle } from "@capacitor/haptics";

function HydroFloaty({ message, position }) {
  const [isPopupVisible, setPopupVisible] = useState(false);
  const togglePopup = () => {
    if (isPopupVisible) {
      playClickSound();
    }
    setPopupVisible(!isPopupVisible);
  };
  const popupStyles =
    position === "left-bottom"
      ? "rounded-b-[20px] rounded-tl-[20px]"
      : "rounded-t-[20px] rounded-bl-[20px]";

  const containerPosition =
    position === "left-bottom"
      ? "flex flex-row fixed top-20 right-4 items-start max-w-[250px]"
      : "flex flex-row fixed bottom-20 right-4 items-end max-w-[250px]";

  useEffect(() => {
    async function preloadAudio() {
      try {
        await NativeAudio.preload({
          assetPath: "hydro_reply.mp3",
          assetId: "hydro_reply",
          audioChannelNum: 1,
        });
      } catch (error) {
        console.error("Error preloading audio:", error);
      }
    }
    preloadAudio();
  }, []);

  async function playClickSound() {
    try {
      await NativeAudio.play({
        assetId: "hydro_reply",
      });
      Haptics.impact({ style: ImpactStyle.Medium });
    } catch (error) {
      console.error("Error playing audio:", error);
    }
  }

  return (
    <div className={containerPosition}>
      {isPopupVisible && (
        <motion.div
          initial={{ scale: 0, zIndex: 1 }}
          animate={{ scale: 1, zIndex: 1 }}
          exit={{ zIndex: 0 }}
          transition={{ duration: 0.5 }}
          className={`flex flex-col bg-white p-s-10 ${popupStyles} border-2 border-primary mr-[-10px] mt-[15px]`}
        >
          <div className="flex flex-row">
            <img src={hydro} className="w-[1.25rem] h-[1.25rem] mr-m-5" />
            <p className="font-hydro text-primary">
              <Typewriter
                options={{
                  delay: 50,
                  autoStart: true,
                }}
                onInit={(typewriter) => {
                  typewriter
                    .typeString(`${message}`)
                    .callFunction(() => {
                      console.log("String typed out!");
                    })
                    .pauseFor(1000)
                    .start();
                }}
              />
            </p>
          </div>
        </motion.div>
      )}

      <motion.div
        className={`bg-white flex-shrink-0 ${
          isPopupVisible
            ? "w-[1.875rem] h-[1.875rem]"
            : "w-[3.125rem] h-[3.125rem]"
        } rounded-full border-2 border-primary flex items-center justify-center`}
        onClick={togglePopup}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
        style={{ zIndex: 2 }}
      >
        {isPopupVisible ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5 text-primary"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <img src={hydro} className="w-[1.875rem] h-[1.875rem]" />
        )}
      </motion.div>
    </div>
  );
}

export default HydroFloaty;
