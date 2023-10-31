import React, { useEffect, useState } from "react";
import hydro_info from "../images/hydro/hydro_info.png";
import { motion, AnimatePresence } from "framer-motion";
function InfoModal({
  isOpen,
  infoTitle = "Default Title",
  infoMessage = "Default Message",
}) {
  const [isDisplayed, setIsDisplayed] = useState(isOpen);
  const [isShrinking, setIsShrinking] = useState(false);
  useEffect(() => {
    if (isOpen) {
      const shrinkTimer = setTimeout(() => {
        setIsShrinking(true);
      }, 1000); // Start shrinking animation 0.5s before dismissal
      const dismissTimer = setTimeout(() => {
        setIsDisplayed(false);
      }, 2000); // Dismiss modal after 5 seconds
      return () => {
        clearTimeout(shrinkTimer);
        clearTimeout(dismissTimer); // Cleanup timers on component unmount
      };
    }
  }, [isOpen]);

  if (!isDisplayed) return null;
  return (
    <AnimatePresence>
      {isDisplayed && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50 ">
          <motion.div
            className="bg-white p-6 rounded-[10px] shadow-lg"
            initial={{ scale: 1 }}
            animate={isShrinking ? { scale: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-col max-w-[300px]">
              <div className="flex flex-row">
                <img
                  src={hydro_info}
                  className="h-[2.1875rem] w-[2.1875rem] mr-m-10 animate-pulse"
                />
                <p className="text-title font-lexend font-title text-primary  text-center">
                  {infoTitle}
                </p>
              </div>
            </div>
            <p className="mt-m-15 text-label text-text-light font-lexend font-label">
              {infoMessage}
            </p>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

export default InfoModal;
