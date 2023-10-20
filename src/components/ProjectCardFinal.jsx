import React, { useEffect, useState } from "react";
import thumbnail from "../images/thumbnail.png";
import RatingsBar from "./RatingsBar.jsx";
import { useNavigate } from "react-router-dom";
import SkillPill from "./SkillPill.jsx";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import { getProjectData } from "../utils/getProjectData.js";

function ProjectCardFinal({ id }) {
  const [selected, setSelected] = React.useState([]);
  const [position, setPosition] = React.useState(0);
  const [project, setProject] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProjectDetails = async () => {
      const data = await getProjectData(id);
      setProject(data);
    };

    fetchProjectDetails();
  }, [id]);

  if (!project) return null;

  console.log("ID RECIEVED", id);

  const navigateDetails = async () => {
    navigate(`/project-details/${id}`);
  };

  return (
    <div
      onClick={navigateDetails}
      className="flex flex-col w-[15.625rem]  bg-white rounded-[10px] h-full mr-m-10 "
    >
      <img
        className="object-contain rounded-t-[10px] w-[15.625rem] max-h-[180px]"
        src={project.thumbnail}
      />
      <div className="mx-m-10">
        <p className="text-label font-label font-lexend mt-m-10">
          {project.projectTitle}
        </p>
        <p className="text-label font-label font-lexend text-primary">
          {project.projectAuthor}
        </p>
        <div className="flex flex-row items-center mt-m-5">
          <p className="text-small-light font-small-light font-lexend text-text-light mr-m-5">
            {project.projectRating}
          </p>
          <RatingsBar rating={project.projectRating} />
        </div>

        <div className="flex flex-row items-center mt-m-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-[0.9375rem] h-[0.9375rem] text-text-light"
          >
            <path d="M15.98 1.804a1 1 0 00-1.96 0l-.24 1.192a1 1 0 01-.784.785l-1.192.238a1 1 0 000 1.962l1.192.238a1 1 0 01.785.785l.238 1.192a1 1 0 001.962 0l.238-1.192a1 1 0 01.785-.785l1.192-.238a1 1 0 000-1.962l-1.192-.238a1 1 0 01-.785-.785l-.238-1.192zM6.949 5.684a1 1 0 00-1.898 0l-.683 2.051a1 1 0 01-.633.633l-2.051.683a1 1 0 000 1.898l2.051.684a1 1 0 01.633.632l.683 2.051a1 1 0 001.898 0l.683-2.051a1 1 0 01.633-.633l2.051-.683a1 1 0 000-1.898l-2.051-.683a1 1 0 01-.633-.633L6.95 5.684zM13.949 13.684a1 1 0 00-1.898 0l-.184.551a1 1 0 01-.632.633l-.551.183a1 1 0 000 1.898l.551.183a1 1 0 01.633.633l.183.551a1 1 0 001.898 0l.184-.551a1 1 0 01.632-.633l.551-.183a1 1 0 000-1.898l-.551-.184a1 1 0 01-.633-.632l-.183-.551z" />
          </svg>

          <p className="text-small-light font-small-light font-lexend ml-m-5 text-text-light">
            {project.projectDifficulty}
          </p>
        </div>

        <div className="flex flex-row items-center mt-m-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-[0.9375rem] h-[0.9375rem] text-text-light"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-13a.75.75 0 00-1.5 0v5c0 .414.336.75.75.75h4a.75.75 0 000-1.5h-3.25V5z"
              clipRule="evenodd"
            />
          </svg>
          <p className="text-small-light font-small-light font-lexend ml-m-5 text-text-light">
            {project.projectTime}
          </p>
        </div>

        <div className="flex flex-wrap gap-1 mb-m-10 mt-m-10">
          {project.skillIds.map((skillId, index) => (
            <SkillPill key={index} skillId={skillId} />
          ))}
        </div>
      </div>
    </div>
  );
}

function LeftArrow() {
  const { isFirstItemVisible, scrollPrev } =
    React.useContext(VisibilityContext);

  return (
    <Arrow disabled={isFirstItemVisible} onClick={() => scrollPrev()}>
      Left
    </Arrow>
  );
}

function RightArrow() {
  const { isLastItemVisible, scrollNext } = React.useContext(VisibilityContext);

  return (
    <Arrow disabled={isLastItemVisible} onClick={() => scrollNext()}>
      Right
    </Arrow>
  );
}

export default ProjectCardFinal;
