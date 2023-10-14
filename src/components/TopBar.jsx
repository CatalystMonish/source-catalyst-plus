import React from "react";
import { UserAuth } from "../context/AuthContext";

import { useNavigate } from "react-router-dom";

function TopBar() {


  const navigate = useNavigate();
  const { user } = UserAuth();

  const goBack = () => {
    navigate("/"); // Go back one step in history
  };

  const goChats = () => {
    navigate("/chats");
  };

  const goProfile = () => {
    navigate("/profile"); // Go back one step in history
  };

  return (
    <div className="fixed top-0 z-10 flex h-[4rem] w-full flex-row items-center bg-white font-lexend text-heading font-heading shadow-md">
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          // onClick={goBack}
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="ml-m-20 h-6 w-6 text-black"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </div>

      <p className=" ml-m-15 py-4 font-lexend text-heading font-heading text-black">
        Source Catalyst
      </p>

      <svg
        onClick={goChats}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className="ml-auto mr-m-20 h-[1.25rem] w-[1.25rem] text-black"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 011.037-.443 48.282 48.282 0 005.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
        />
      </svg>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className="mr-m-20 h-[1.25rem] w-[1.25rem] text-black"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
        />
      </svg>

      <img
        onClick={goProfile}
        className="mr-m-20 h-[2.125rem] w-[2.125rem] rounded-full "
        src={user?.photoURL}
      />
    </div>
  );
}

export default TopBar;
