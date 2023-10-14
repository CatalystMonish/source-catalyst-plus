import React from "react";
import { Outlet } from "react-router-dom";
import TopBar from "../components/TopBar";
import Navbar from "../components/Navbar";

function HomeLayout() {
  return (
    <div className="">
      <TopBar />
      <div className="flex flex-col items-center bg-light">
        <div className="w-full max-w-[800px]">
          <Outlet />
        </div>
      </div>
      <Navbar />
    </div>
  );
}

export default HomeLayout;
