import React from "react";
import { useNavigate } from "react-router-dom";
function FloatingActionButton() {
  const navigate = useNavigate();

  const navigateNewPost = async () => {
    navigate("/complete_profile");
  };

  return (
    <div
      onClick={navigateNewPost}
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
  );
}

export default FloatingActionButton;