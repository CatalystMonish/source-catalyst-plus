import React from "react";
import python from "../images/python.png";

function CoursesCard() {
  return (
    <div className="flex flex-col bg-white rounded-[10px] h-full mr-m-10 bg-white">
      <div className="flex flex-row mx-m-10 mt-m-20 items-center">
        <img className="w-[3.125rem] h-[3.125rem]" src={python} />

        <div className="flex flex-col">
          <p className="text-label font-lexend font-label ml-m-10">
            MACHINE LEARNING AND DATA SCIENCE WITH PYTHON
          </p>
          <p className="text-primary text-label font-lexend font-label ml-m-10">
            3 projects, 30 days
          </p>
        </div>
      </div>
      <div className="mx-m-10 my-m-10">
        <p className=" text-label font-lexend font-label ml-m-10 text-text-light">
          Unleash the power of data with our "Machine Learning and Data Science
          with Python" program. Ignite your career, decode insights, and
          navigate the AI frontier effortlessly.
        </p>
      </div>
    </div>
  );
}

export default CoursesCard;
