import React, { useState } from "react";
import { UserAuth } from "../context/AuthContext";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import logo from "../images/logo.png";

function TopBar() {
  const navigate = useNavigate();
  const { user } = UserAuth();
  const [isDrawerVisible, setIsDrawerVisible] = useState(false);

  const showDrawer = () => {
    setIsDrawerVisible(!isDrawerVisible);
  };

  const drawerVariants = {
    open: { x: 0, transition: { type: "tween", ease: "linear" } },
    closed: { x: "-100%", transition: { type: "tween", ease: "linear" } },
  };
  const goBack = () => {
    navigate("/"); // Go back one step in history
  };

  const goChats = () => {
    navigate("/chats");
  };

  const goProfile = () => {
    navigate(`/profile/${user.uid}`); // Go back one step in history
  };

  return (
    <div className="fixed top-0 z-10 flex h-[4rem] w-full flex-row items-center bg-white font-lexend text-heading font-heading shadow-md">
      <div>
        <svg
          onClick={showDrawer}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
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

      {/*<svg*/}
      {/*  onClick={goChats}*/}
      {/*  xmlns="http://www.w3.org/2000/svg"*/}
      {/*  fill="none"*/}
      {/*  viewBox="0 0 24 24"*/}
      {/*  strokeWidth={2}*/}
      {/*  stroke="currentColor"*/}
      {/*  className="ml-auto mr-m-20 h-[1.25rem] w-[1.25rem] text-black"*/}
      {/*>*/}
      {/*  <path*/}
      {/*    strokeLinecap="round"*/}
      {/*    strokeLinejoin="round"*/}
      {/*    d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 011.037-.443 48.282 48.282 0 005.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"*/}
      {/*  />*/}
      {/*</svg>*/}

      {/*<svg*/}
      {/*  xmlns="http://www.w3.org/2000/svg"*/}
      {/*  fill="none"*/}
      {/*  viewBox="0 0 24 24"*/}
      {/*  strokeWidth={2}*/}
      {/*  stroke="currentColor"*/}
      {/*  className="mr-m-20 h-[1.25rem] w-[1.25rem] text-black"*/}
      {/*>*/}
      {/*  <path*/}
      {/*    strokeLinecap="round"*/}
      {/*    strokeLinejoin="round"*/}
      {/*    d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"*/}
      {/*  />*/}
      {/*</svg>*/}

      <img
        onClick={goProfile}
        className="mr-m-20 h-[2.125rem] w-[2.125rem] rounded-full ml-auto  "
        src={user?.photoURL}
      />
      {/* Drawer component */}
      <AnimatePresence>
        {isDrawerVisible && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={drawerVariants}
            id="drawer-example"
            className="fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto bg-white w-[250px] drop-shadow-2xl"
            tabIndex="-1"
            aria-labelledby="drawer-label"
          >
            {/* ... drawer content ... */}
            <button
              onClick={showDrawer}
              type="button"
              aria-controls="drawer-example"
              className="text-black bg-transparent w-8 h-8 absolute top-2.5 right-2.5 inline-flex items-center justify-center"
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
            </button>
            {/* ... drawer content ... */}

            <div className="rounded-[10px] bg-light flex py-s-15 mt-10 items-center">
              <img
                src={logo}
                className="ml-m-10 bg-white rounded-full p-1 w-[2.5rem] h-[2.5rem]"
              />
              <p className="text-label font-label font-lexend ml-m-10">
                Source Catalyst
              </p>
            </div>
            {/*<p className="text-label font-lexend font-label py-s-10 mt-m-20 px-s-5">*/}
            {/*  SETTINGS*/}
            {/*</p>*/}
            {/*<p className="text-label font-lexend font-label py-s-10 px-s-5">*/}
            {/*  ABOUT*/}
            {/*</p>*/}
            {/*<p className="text-label font-lexend font-label py-s-10 px-s-5">*/}
            {/*  LICENCES*/}
            {/*</p>*/}
            {/*<p className="text-label font-lexend font-label py-s-10 px-s-5">*/}
            {/*  UPDATE*/}
            {/*</p>*/}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default TopBar;
