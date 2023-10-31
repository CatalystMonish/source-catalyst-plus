import React, { useEffect, useState } from "react";
import TitleBold from "../components/TitleBold.jsx";
import OngoingCard from "../components/OngoingCard.jsx";
import LoadingModal from "../components/LoadingModal.jsx";
import CategoryCard from "../components/CategoryCard.jsx";
import ai from "../images/ic_ai.png";
import fullstack from "../images/ic_fullstack.png";
import machine from "../images/ic_machine.png";
import { ScrollMenu } from "react-horizontal-scrolling-menu";
import ProjectCardFinal from "../components/ProjectCardFinal.jsx";
import { fetchProjectIds } from "../utils/getProjectData.js";
import { useLoading } from "../context/LoadingContext.jsx";
import CoursesCard from "../components/CoursesCard.jsx";

function ProjectScreen() {
  const { isLoading, setIsLoading } = useLoading();
  const [projectIds, setProjectIds] = useState([]);

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

  return (
    <div className="min-h-screen bg-light py-[4.625rem]">
      <div className="mx-m-15">
        <TitleBold text="ALL COURSES" />
        {/*<ScrollMenu>*/}
        {/*  {projectIds.map((id) => (*/}
        {/*    <ProjectCardFinal key={id} id={id} />*/}
        {/*  ))}*/}
        {/*</ScrollMenu>*/}
        <CoursesCard />
      </div>
    </div>
  );
}

export default ProjectScreen;
