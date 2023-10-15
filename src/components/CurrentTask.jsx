import React from "react";




const TaskAccordian = ({ title, number }) => {


  return (
    <div className="mb-m-10 flex bg-light items-center mx-m-10 rounded-[10px]">

        <div className="my-m-20 ml-m-15 flex h-[1.875rem] w-[1.875rem] flex-shrink-0 items-center justify-center rounded-full bg-primary">
          <p className="flex-shrink-0 font-lexend text-content font-content text-white">
            {number}
          </p>
        </div>
        <p className="ml-m-15 mr-m-10 font-lexend text-content font-content">
          {title}
        </p>


      </div>

  );
};

export default TaskAccordian;
