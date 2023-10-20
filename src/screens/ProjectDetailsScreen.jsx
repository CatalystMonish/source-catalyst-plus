import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SkillPill from "../components/SkillPill";
import RatingsBar from "../components/RatingsBar";
import PageBar from "../components/PageBar";
import { getProjectData } from "../utils/getProjectData.js";

function ProjectDetailsScreen() {
  const { id } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    const fetchProjectDetails = async () => {
      const data = await getProjectData(id);
      setProject(data);
    };

    fetchProjectDetails();
  }, [id]);

  if (!project) return null;
  return (
    <div className="bg-white h-screen">
      <PageBar title="Project Details" />
      <div className="flex flex-col items-center">
        <div className="w-full max-w-[1000px]">
          <div className="h-screen pt-[4rem] ">
            <div className="mx-m-20">
              <img
                src={project.thumbnail}
                className="h-fit rounded-lg lg:min-w-[800px]"
                alt="project-thumbnail"
              />

              <h1 className="mt-m-15 font-lexend text-title font-title">
                {project.projectTitle}
              </h1>

              <div className="mt-m-10 flex items-center">
                <p className="text-label font-lexend font-label text-primary mr-m-5">
                  {project.projectAuthor}
                </p>
                <p className="ml-2 font-lexend text-small-light font-small-light text-text-light mr-m-5 mt-1">
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
                  {project.projectDifficulty.toUpperCase()}
                </p>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-[0.9375rem] h-[0.9375rem] text-text-light ml-m-10"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-13a.75.75 0 00-1.5 0v5c0 .414.336.75.75.75h4a.75.75 0 000-1.5h-3.25V5z"
                    clipRule="evenodd"
                  />
                </svg>
                <p className="text-small-light font-small-light font-lexend ml-m-5 text-text-light">
                  {project.projectTime.toString().toUpperCase()}
                </p>
              </div>

              <div className="mt-4 flex flex-row flex-wrap gap-1">
                {project.skillIds.map((skillId, index) => (
                  <SkillPill key={index} skillId={skillId} />
                ))}
              </div>

              <p className="mt-m-10 font-lexend text-label font-label text-text-light">
                {project.projectDescription}
              </p>
            </div>
          </div>
        </div>
      </div>

      <button className="text-label bottom-0 relative font-lexend font-label bg-[#219653] text-white w-full rounded-full py-s-15 ">
        Start Project
      </button>
    </div>
  );
}

export default ProjectDetailsScreen;
