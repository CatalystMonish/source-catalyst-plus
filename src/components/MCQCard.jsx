import React, { useState } from "react";
import HydroStaticPopup from "../hydro/HydroStaticPopup.jsx";

function McqCard() {
  const [selectedOption, setSelectedOption] = useState("");
  const isCode = false;
  const [showPopup, setShowPopup] = useState(false);
  const correctOption = 4;
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [correctAns, setCorrectAns] = useState(false);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  function checkAns() {
    setCorrectAns(correctOption == selectedOption);
    setShowPopup(true);
    setIsSubmitted(true); // Set to true on submission
  }

  return (
    <div className="flex flex-col">
      <div className="flex border-2 rounded-[10px] border-[#C3C3C3] p-s-20 bg-white flex-col">
        <p className="text-content font-content font-lexend">
          What function do you use to load a CSV file into a pandas DataFrame?
        </p>

        <div className="flex flex-col">
          <div>
            <form
              className={`flex flex-col text-content ${
                isCode ? "font-code" : "font-lexend"
              }  font-content gap-2 my-m-10`}
            >
              <label className="flex items-center gap-1">
                <input
                  className="w-5 h-5 radio-checked"
                  type="radio"
                  value="1"
                  checked={selectedOption === "1"}
                  onChange={handleOptionChange}
                  disabled={isSubmitted}
                />
                Option 1
              </label>
              <label className="flex items-center gap-1">
                <input
                  className="w-5 h-5 radio-checked"
                  type="radio"
                  value="2"
                  checked={selectedOption === "2"}
                  onChange={handleOptionChange}
                  disabled={isSubmitted}
                />
                Option 2
              </label>
              <label className="flex items-center gap-1">
                <input
                  className="w-5 h-5 radio-checked"
                  type="radio"
                  value="3"
                  checked={selectedOption === "3"}
                  onChange={handleOptionChange}
                  disabled={isSubmitted}
                />
                Option 3
              </label>
              <label className="flex items-center gap-1">
                <input
                  className="w-5 h-5 radio-checked"
                  type="radio"
                  value="4"
                  checked={selectedOption === "4"}
                  onChange={handleOptionChange}
                  disabled={isSubmitted}
                />
                Option 4
              </label>
            </form>

            {/*  <p>Selected option: {selectedOption}</p>*/}
          </div>
          {/*<p className="text-content text-text-light font-lexend ml-m-10">Test</p>*/}
        </div>
      </div>
      {!showPopup && (
        <button
          onClick={checkAns}
          className="bg-[#F2C94C] p-s-10 text-white rounded-full ml-auto px-s-20 text-label font-label font-lexend mt-m-10"
        >
          Submit
        </button>
      )}
      {showPopup && (
        <HydroStaticPopup
          correctAns={correctAns}
          explanation="This is the explanation bruh"
        />
      )}
    </div>
  );
}

export default McqCard;
