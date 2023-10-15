import SkillPill from "../components/SkillPill";
import ProjectItemCard from "../components/ProjectItemCard";
import TaskAccordian from "../components/TaskAccordian";
import TitleBold from "../components/TitleBold";
import React, {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import { useLoading } from '../context/LoadingContext.jsx';


function OngoingProjectScreen() {
  const { setIsLoading } = useLoading();

  useEffect(() => {
    setIsLoading(false);
  }, []);

  const navigate = useNavigate();
  const goBack = () => {
    navigate("/"); // Go back one step in history
  };


  const [activeTab, setActiveTab] = useState("Roadmap");

  const sampleTasks = [
    {
      title: "Learn React Basics",
      content: "Understand JSX, state management, and component lifecycle.",
    },
    {
      title: "Setup Python Environment",
      content:
        "Install Python, setup virtualenv, and install necessary packages.",
    },
    {
      title: "Design UI/UX",
      content: "Sketch the basic UI/UX design and create wireframes.",
    },
    {
      title: "Database Design",
      content: "Normalize the database and create the necessary tables.",
    },
    {
      title: "API Endpoints",
      content: "Create RESTful API endpoints using Express.js.",
    },
    {
      title: "Front-end Validation",
      content: "Use client-side validation for forms using JavaScript.",
    },
    {
      title: "Server-side Validation",
      content:
        "Implement server-side validation to protect against malicious input.",
    },
    {
      title: "User Authentication",
      content: "Implement JWT based authentication and OAuth.",
    },
    {
      title: "Optimize Performance",
      content: "Use lazy loading, code splitting and optimize images.",
    },
    {
      title: "Final Testing",
      content: "Perform unit tests, integration tests, and end-to-end tests.",
    },
  ];

  return (
    <div className=" bg-light">
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

      <div className="h-screen">
        <div className=" flex justify-center space-x-4  bg-white px-[1.5rem] pb-s-15">
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
        <div className="flex flex-col items-center">
          <div className="w-full max-w-[1500px]">
            <div className="mx-m-15">
              {activeTab === "Roadmap" && (
                <div className="section-transition">
                  <TitleBold text="TASKS" />
                  {sampleTasks.map((task, index) => (
                    <TaskAccordian
                      title={task.title}
                      content={task.content}
                      number={index + 1}
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
      </div>
    </div>
  );
}

export default OngoingProjectScreen;
