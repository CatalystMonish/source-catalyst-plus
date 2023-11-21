import React from "react";
import hydro_happy from "../images/hydro/hydro_happy.png";
import hydro_sad from "../images/hydro/hydro_sad.png";

function HydroStaticPopup({ correctAns, explanation }) {
  return (
    <div className="mt-m-20">
      <img
        src={correctAns ? hydro_happy : hydro_sad}
        className="w-[1.875rem] h-[1.875rem]"
      />
      <div className="mx-m-10">
        <svg
          width="22"
          height="27"
          viewBox="0 0 22 27"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="mt-m-5 mb-[-10px]"
        >
          <path
            d="M0 2.62747C0 0.745127 2.3635 -0.0948613 3.55142 1.36529L21.346 23.2378C22.4092 24.5446 21.4793 26.5 19.7946 26.5H2C0.89543 26.5 0 25.6046 0 24.5V2.62747Z"
            fill="white"
          />
        </svg>

        <div className="flex flex-col bg-white p-s-10  rounded-[10px]">
          <p
            className={`font-hydro text-[0.9375rem] ${
              correctAns ? "text-[#089C05]" : "text-[#E52245]"
            }`}
          >
            {correctAns ? "Very Good!" : "Oops!"}
          </p>
          <p className="text-content-body font-lexend font-content-body text-text-light mt-m-10">
            {explanation}
          </p>
        </div>
      </div>
    </div>
  );
}

export default HydroStaticPopup;
