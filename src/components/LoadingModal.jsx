import React, { useEffect, useState } from "react";
import hydro_loading from "../images/hydro/hydro_loading.png";

function LoadingModal({ isOpen }) {
  const [message, setMessage] = useState("");
  const messages = [
    "Loading",
    "Processing",
    "Preparing",
    "Fetching",
    "Updating",
    "Syncing",
  ];

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * messages.length);
    setMessage(messages[randomIndex]);
  }, []);
  if (!isOpen) return null;
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-[10px] shadow-lg">
        <div className="flex flex-row items-center">
          <img
            src={hydro_loading}
            className="h-[2.1875rem] w-[2.1875rem] mr-m-10 animate-pulse"
          />
          <p className="text-title font-hydro font-title text-primary animate-flash text-center">
            {message}
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoadingModal;
