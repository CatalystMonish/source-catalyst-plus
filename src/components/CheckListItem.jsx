import React, { useState } from "react";

function CheckListItem({ text = "Default text", onCheckedChange }) {
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheck = () => {
    const newState = !isChecked;
    setIsChecked(newState);
    if (onCheckedChange) onCheckedChange(newState);
  };

  return (
    <div
      className="mb-m-10 mx-m-20 my-m-20 flex items-center rounded-lg bg-white p-s-10 w-full"
      onClick={toggleCheck}
    >
      <div className="relative h-4 w-4 shrink-0 bg-light border-2 border-[#DCDCDC] rounded-[0.1875rem]">
        {isChecked && (
          <svg
            className="absolute left-0 top-0 h-full w-full "
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline className="w-6 h-6" points="20 6 9 17 4 12"></polyline>
          </svg>
        )}
      </div>
      <p className="ml-m-10 font-lexend text-content font-content">{text}</p>
    </div>
  );
}

export default CheckListItem;
