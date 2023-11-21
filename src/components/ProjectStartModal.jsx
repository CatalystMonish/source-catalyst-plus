import React, { useEffect, useState } from "react";
import CheckListItem from "./CheckListItem.jsx";
import { format } from "date-fns";
import { addOngoingData } from "../utils/addOngoingData.js"; // Adjust the path to your utility file'
import { UserAuth } from "../context/AuthContext.jsx";
import LoadingModal from "../components/LoadingModal.jsx";
import { useNavigate } from "react-router-dom";
function ProjectStartModal({ isOpen, closeModal, projectTime, projectID }) {
  const { user } = UserAuth();
  const [currentDate, setCurrentDate] = useState(null);
  const [futureDate, setFutureDate] = useState(null);
  const [isItemChecked, setIsItemChecked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const handleCheckedChange = (newState) => {
    setIsItemChecked(newState);
  };
  useEffect(() => {
    const date = new Date();
    setCurrentDate(new Date(date)); // Creating a new Date object for currentDate
    const newFutureDate = new Date(date); // Creating a new Date object for futureDate
    newFutureDate.setDate(newFutureDate.getDate() + projectTime);
    setFutureDate(newFutureDate);
  }, []); // Empty dependency array ensures this runs once when component mounts

  const handleContinueClick = async () => {
    if (user) {
      setIsLoading(true); // Set loading to true when starting data upload
      try {
        await addOngoingData(user.uid, projectID); // Pass uid and projectID to addOngoingData
        setIsLoading(false); // Set loading to false when data upload is complete
        closeModal(); // Dismiss the modal when data upload is complete
        navigate("/home"); // Navigate immediately after
      } catch (error) {
        setIsLoading(false); // Set loading to false if an error occurs
        console.error("Error adding data: ", error);
      }
    } else {
      console.error("User is not authenticated");
    }
  };
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="flex flex-col max-w-[350px]">
        <div className="w-full py-s-20 rounded-t-[10px] bg-white text-center flex items-center mx-auto">
          <svg
            onClick={closeModal}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-[20px] h-[20px] ml-[20px]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
          <div className="flex items-center justify-center  w-full mr-[40px]">
            <p className="font-heading font-lexend text-heading">
              Start Project
            </p>
          </div>
        </div>
        <div className="bg-light flex flex-col px-s-20 items-center rounded-b-[10px] shadow-lg max-w-[25rem]">
          <div className="flex items-center mx-[2.5rem] mt-m-15">
            <div className="flex flex-col items-center text-center">
              <p className="text-title font-title font-lexend">
                {format(currentDate, "dd/MM/yyyy")}
              </p>
              <p className="text-section-head font-section-head font-lexend text-text-light">
                START DATE
              </p>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 mx-m-20"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
            <div className="flex flex-col items-center text-center">
              <p className="text-title font-title font-lexend">
                {format(futureDate, "dd/MM/yyyy")}
              </p>
              <p className="text-section-head font-section-head font-lexend text-text-light">
                END DATE
              </p>
            </div>
          </div>
          <CheckListItem
            onCheckedChange={handleCheckedChange}
            text="I am willing to commit the time and resources required."
          />
          <button
            onClick={handleContinueClick}
            className={`w-full mx-m-20 text-label font-lexend py-[0.625rem] mb-m-20 rounded-[10px] ${
              isItemChecked
                ? "bg-primary text-white hover:bg-hover active:bg-clicked"
                : "bg-gray-300 cursor-not-allowed"
            }`}
            disabled={!isItemChecked}
          >
            Continue
          </button>
        </div>
      </div>
      <LoadingModal isOpen={isLoading} />
    </div>
  );
}

export default ProjectStartModal;
