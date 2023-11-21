import React from "react";
import thumbnail from "../images/python.png";

function PhotoTextCard() {
  return (
    <div className="flex flex-col w-fit mb-s-20 mx-m-15">
      <img className=" rounded-[20px]" src={thumbnail} />
      <p className="flex text-content font-content font-lexend mt-m-20">
        We will install the following Python Libraries pandas scikit-learn
        matplotlib
      </p>
    </div>
  );
}

export default PhotoTextCard;
