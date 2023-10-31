import SkillPill from "../components/SkillPill";
import ProjectItemCard from "../components/ProjectItemCard";
import TaskAccordian from "../components/TaskAccordian";
import TitleBold from "../components/TitleBold";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useLoading } from "../context/LoadingContext.jsx";
import { getProjectTasks } from "../utils/getProjectTasks.js";

function OngoingProjectScreen() {
  const { setIsLoading } = useLoading();
  const { id } = useParams();
  const [tasksData, setTasksData] = useState([]);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  useEffect(() => {
    const loadTasks = async () => {
      const tasks = await getProjectTasks(id);
      setTasksData(tasks);
    };

    loadTasks(); // Execute the function to load tasks
  }, [id]);

  const navigate = useNavigate();
  const goBack = () => {
    navigate("/"); // Go back one step in history
  };

  const goSubmit = () => {
    navigate(`/submission/${id}`); // Go back one step in history
  };

  const [activeTab, setActiveTab] = useState("Roadmap");

  return (
    <div className=" bg-light h-screen ">
      <div className="z-10 flex h-[4rem] w-full flex-row items-center bg-white font-lexend text-heading font-heading ">
        <div className="flex items-center">
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
            Ongoing Project
          </p>
        </div>
      </div>

      <div className="h-screen ">
        <div className=" flex justify-center space-x-4  bg-white px-[1.5rem] pb-s-15 ">
          <button
            onClick={() => setActiveTab("Roadmap")}
            className={`h-[3.25rem] w-[10rem] rounded-lg font-lexend text-label font-label ${
              activeTab === "Roadmap" ? "bg-primary text-white" : "bg-light"
            }`}
          >
            Roadmap
          </button>
          <button
            onClick={() => setActiveTab("About")}
            className={`h-[3.25rem] w-[10rem] rounded-lg font-lexend text-label font-label ${
              activeTab === "About" ? "bg-primary text-white" : "bg-light"
            }`}
          >
            About
          </button>
        </div>
        <div className="flex flex-col items-center pb-[4.625rem]">
          <div className="w-full max-w-[1500px]">
            <div className="mx-m-15">
              {activeTab === "Roadmap" && (
                <div className="section-transition">
                  <TitleBold text="TASKS" />
                  {tasksData.map((task, index) => (
                    <TaskAccordian
                      title={task.taskTitle}
                      preText={task.taskPreText}
                      postText={task.taskPostText}
                      code={task.taskCode}
                      codeLanguage={task.taskCodeLanguage}
                      number={task.taskNumber} // Using taskNumber here
                      key={index}
                    />
                  ))}
                </div>
              )}
              {activeTab === "About" && (
                <div className="section-transition">
                  <TitleBold text="TITLE" />

                  <div className="grid grid-cols-2 gap-2"></div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="flex fixed bottom-0 w-full bg-white justify-center py-s-15">
          <button className=" max-w-md mx-m-10 text-black flex flex-grow text-label font-lexend font-label bg-[#F3F3F3] text-center text-white  rounded-full py-s-15 ">
            <p className=" text-black text-center w-full">Need Help?</p>
          </button>
          <button
            onClick={goSubmit}
            className="max-w-md mr-m-10 flex flex-grow text-label font-lexend font-label bg-[#F2C94C] text-white text-center  rounded-full py-s-15 "
          >
            <p className=" text-center w-full"> Ready to Submit</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default OngoingProjectScreen;
