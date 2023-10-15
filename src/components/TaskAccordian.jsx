import React, { useState } from "react";
import DocumentBlock from "./DocumentBlock";
import CodeBlock from "./CodeBlock";
import VideoBlock from "./VideoBlock";

const ArrowDownIcon = ({ isOpen, onClick }) => {
  const rotationClass = isOpen ? "rotate-180" : "rotate-0";

  return (
    <svg
      onClick={onClick}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={`ml-auto mr-m-15 h-6 w-6 flex-shrink-0 ${rotationClass}`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
};

const TaskAccordian = ({ title, content, number }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div onClick={() => setIsOpen(!isOpen)} className="mb-m-10 ">
      <div
        className={`flex items-center bg-white transition-all duration-300 ease-in-out 
        ${isOpen ? "rounded-t-lg" : "rounded-lg"}`}
      >
        <div className="my-m-20 ml-m-15 flex h-[1.875rem] w-[1.875rem] flex-shrink-0 items-center justify-center rounded-full bg-primary">
          <p className="flex-shrink-0 font-lexend text-content font-content text-white">
            {number}
          </p>
        </div>
        <p className="ml-m-15 mr-m-10 font-lexend text-content font-content">
          {title}
        </p>

        <ArrowDownIcon isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
      </div>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out 
        ${isOpen ? "opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div className="rounded-b-lg bg-white px-s-15 pb-s-20">
          <p className=" mr-m-10 font-lexend text-content-body font-content-body text-text-light">
            {content}
          </p>
          <DocumentBlock />
          <CodeBlock />
          <VideoBlock />
        </div>
      </div>
    </div>
  );
};

export default TaskAccordian;
