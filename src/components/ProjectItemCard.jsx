import React from "react";
import SkillPill from "./SkillPill";
import RatingsBar from "./RatingsBar";
import { useNavigate } from "react-router-dom";

const ProjectItemCard = ({
  key,
  projectId,
  thumbnail,
  title,
  description,
  author,
  rating,
  skills,
  includedTypes,
}) => {
  const navigate = useNavigate();

  const goProjectDetails = async () => {
    navigate(`/project-details/${projectId}`);
  };

  console.log("skills recieved", skills);
  return (
    <div onClick={goProjectDetails} className="flex justify-center">
      <div className="flex max-w-[300px] flex-col rounded-lg bg-white pb-s-15">
        <div className="h-[160px]">
          <img
            src={thumbnail}
            className="object-fit h-fit w-full rounded-t-lg"
            alt="thumbnail"
          />
        </div>
        <div className="mx-m-15 mt-m-15 flex flex-col ">
          <p className="font-lexend text-title font-title">{title}</p>
          <p className="font-lexend text-label font-label text-text-light">
            {description}
          </p>
          <div className="mt-m-10 flex flex-col justify-between">
            <p className="font-lexend font-label text-primary">{author}</p>
            <div className="flex items-center">
              <RatingsBar rating={rating} />
              <p className="ml-2 font-lexend text-small-light font-small-light text-text-light">
                {rating}
              </p>
            </div>
            <p className="mt-m-10 font-lexend text-small font-small ">SKILLS</p>
          </div>
          <div className="mt-m-5 flex flex-row flex-wrap gap-1">
            {skills.map((skill, index) => (
              <SkillPill key={index} skillId={skill} />
            ))}
          </div>
          <p className="mt-m-10 font-lexend text-small font-small">INCLUDED</p>
          <div className="mt-m-5 flex gap-1">
            {/*{includedTypes.map((type, index) => (*/}
            {/*  // <TypeBlock key={index} type={type} />*/}
            {/*))}*/}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectItemCard;
