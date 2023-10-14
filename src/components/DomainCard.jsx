import React from "react";
import PremiumBadge from "./PremiumBadge";
import pythonImg from "../images/python.png";

function DomainCard() {
  return (
    <div className="font-poppins flex w-[117px] flex-col items-center justify-center rounded-xl bg-white pb-s-10">
      <img
        className=" m-m-15 mx-auto h-auto w-2/3 p-s-5"
        src={pythonImg}
        alt="Python Logo"
      />
      <p className="font-lexend text-content font-content">Python</p>
      <p className="font-lexend text-content-body font-content-body text-text-light">
        10+ Projects
      </p>
    </div>
  );
}

export default DomainCard;
