import React, { useEffect, useState } from "react";
import TitleBold from "../components/TitleBold";
import DomainCard from "../components/DomainCard";
import ProjectCard from "../components/ProjectCard";
import ProjectItemCard from "../components/ProjectItemCard";
import { UserAuth } from "../context/AuthContext";
import FloatingActionButton from "../components/FloatingActionButton";
import CardPostItem from "../components/CardPostItem";
import { SphereSpinner } from "react-spinners-kit";
import ProgressBar from "@ramonak/react-progress-bar";
import OngoingCard from "../components/OngoingCard.jsx";
import { useNavigate } from "react-router-dom";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import "react-horizontal-scrolling-menu/dist/styles.css";
import { getProjectData } from "../utils/getProjectData.js"; // Assuming the function is named `getProjects`
import LoadingModal from "../components/LoadingModal.jsx";
import { useLoading } from "../context/LoadingContext.jsx";
import ProjectCardFinal from "../components/ProjectCardFinal.jsx";
import ImageDisplay from "../components/ImageDisplay.jsx";
// import FirestoreCRUD from "../components/FirestoreCRUD.jsx";
import { fetchProjectIds } from "../utils/getProjectData.js";
import CategoryCard from "../components/CategoryCard.jsx";
import ai from "../images/ic_ai.png";
import fullstack from "../images/ic_fullstack.png";
import machine from "../images/ic_machine.png";
import ProjectStartModal from "../components/ProjectStartModal.jsx";
import { NativeAudio } from "@capacitor-community/native-audio";
import { Haptics, ImpactStyle } from "@capacitor/haptics";

function HomeScreen() {
  const [projectIds, setProjectIds] = useState([]);
  const { isLoading, setIsLoading } = useLoading();
  const { logOut, user } = UserAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchIds = async () => {
      setIsLoading(true);
      try {
        const ids = await fetchProjectIds();
        setProjectIds(ids);
        console.log("PROJECT IDS", projectIds);
      } catch (error) {
        console.error("Error fetching project ids: ", error);
      }
      setIsLoading(false);
    };
    fetchIds();
  }, [setIsLoading]);
  useEffect(() => {
    // Preload audio when component mounts
    NativeAudio.preload({
      assetPath: "welcome.mp3", // updated path assuming public directory
      assetId: "welcome",
    })
      .then(() => {
        // Once audio is preloaded, play the audio
        return NativeAudio.play({
          assetId: "welcome",
        });
      })
      .then(() => {
        // Run after audio has played
        Haptics.impact({ style: ImpactStyle.Medium });
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);
  return (
    <div className="min-h-screen bg-light py-[4.625rem]">
      <div className="mx-m-15">
        <TitleBold text="ONGOING PROJECT" />
        <OngoingCard />
        <ProjectStartModal isOpen={false} />
        <LoadingModal isOpen={isLoading} />
        <TitleBold text="CATEGORIES" />
        <div className="flex flex-row gap-2">
          <CategoryCard img={ai} title="Artifiical Intelligence" />
          <CategoryCard img={fullstack} title="Fullstack Development" />
          <CategoryCard img={machine} title="Machine Learning" />
        </div>
        <TitleBold text="LATEST PROJECTS" />
        <ScrollMenu>
          {projectIds.map((id) => (
            <ProjectCardFinal key={id} id={id} />
          ))}
        </ScrollMenu>
      </div>
    </div>
  );
}
export default HomeScreen;
