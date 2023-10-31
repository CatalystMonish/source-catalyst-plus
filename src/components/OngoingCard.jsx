import * as React from "react";
import { Flat, Heat, Nested } from "@alptugidin/react-circular-progress-bar";
import TaskAccordian from "../components/TaskAccordian";
import CurrentTask from "./CurrentTask.jsx";
import { useNavigate } from "react-router-dom";
import { useLoading } from "../context/LoadingContext.jsx";
import { useContext, useEffect, useState } from "react";
import { NativeAudio } from "@capacitor-community/native-audio";
import { Haptics, ImpactStyle } from "@capacitor/haptics";
import { db } from "../firebase";
import { doc, setDoc, getDocs, collection, getDoc } from "firebase/firestore";
import { UserAuth } from "../context/AuthContext.jsx";

import {
  checkForProjects,
  fetchProjectDetails,
} from "../utils/checkForProjects.js"; // Adjust the import to your file structure

import { IdContext } from "../context/IdContext.jsx"; // Adjust the import to your file structure

function OngoingCard() {
  const { user } = UserAuth();
  const { setIsLoading } = useLoading();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);
  const { id, setId } = useContext(IdContext);
  const [currentTaskNumber, setCurrentTaskNumber] = useState(null); // Assuming you'll need this state as well
  const [projectsFound, setProjectsFound] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      const result = await checkForProjects(user, setIsLoading, setId);
      setProjectsFound(result);
    };
    fetchProjects();
  }, [user, setIsLoading, setId]);

  useEffect(() => {
    fetchProjectDetails(id, user, setProject, setCurrentTaskNumber);
  }, [id, user, setProject, setCurrentTaskNumber]); // Ensure to include all dependencies

  useEffect(() => {
    // Preload audio when component mounts
    NativeAudio.preload({
      assetPath: "click.mp3", // updated path assuming public directory
      assetId: "click",
      audioChannelNum: 1,
    }).catch((error) => {
      console.error("Error preloading audio:", error);
    });
  }, []); // Empty dependency array ensures this runs once on mount

  const navigateOngoingProject = async () => {
    try {
      await NativeAudio.play({
        assetId: "click",
      });
      Haptics.impact({ style: ImpactStyle.Medium });
      // This will now only run after the audio has played
      setIsLoading(true); // Start the loading state
      navigate(`/ongoing/${id}`);
    } catch (error) {
      console.error("Error playing audio:", error);
    }
  };
  return (
    <div className="bg-white rounded-[10px] flex flex-col  ">
      {projectsFound === null ? (
        <div className="flex flex-row "></div>
      ) : projectsFound ? (
        <>
          {project && (
            <div className="flex flex-row mx-m-15  ">
              <p className="text-content font-content font-lexend mt-m-20 mr-auto">
                {project.projectTitle}
              </p>
              <div className="w-[45px] h-[45px] ml-m-20 mt-m-20 z-0">
                {/*<Flat*/}
                {/*  showMiniCircle={false}*/}
                {/*  progress={87}*/}
                {/*  range={{ from: 0, to: 100 }}*/}
                {/*  sign={{ value: "%", position: "end" }}*/}
                {/*  showValue={true}*/}
                {/*  sx={{*/}
                {/*    strokeColor: "#2E7CF6",*/}
                {/*    barWidth: 10,*/}
                {/*    bgStrokeColor: "#ffffff",*/}
                {/*    bgColor: { value: "#939393", transparency: "10" },*/}
                {/*    shape: "full",*/}
                {/*    valueSize: 30,*/}
                {/*    valueWeight: "regular",*/}
                {/*    valueFamily: "lexend",*/}
                {/*    valueColor: "#000000",*/}
                {/*    textSize: 10,*/}
                {/*    textColor: "#000000",*/}
                {/*    loadingTime: 1000,*/}
                {/*    valueAnimation: true,*/}
                {/*    intersectionEnabled: true,*/}
                {/*  }}*/}
                {/*/>*/}
              </div>
            </div>
          )}
          <div className="mt-m-10 flex flex-col">
            <CurrentTask number={currentTaskNumber} title="Resume your task" />
            <button
              onClick={navigateOngoingProject}
              className="text-label font-lexend py-[0.625rem] mb-m-20  rounded-[10px] bg-primary text-white mx-m-10 hover:bg-hover active:bg-clicked"
            >
              Continue
            </button>
          </div>
        </>
      ) : (
        <div className="flex flex-col items-center justify-center text-center p-s-20">
          <div className="text-content font-content text-text-light font-lexend ">
            Start a Project
          </div>
        </div>
      )}
    </div>
  );
}

export default OngoingCard;
