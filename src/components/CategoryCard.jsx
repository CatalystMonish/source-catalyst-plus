import React from "react";

function CategoryCard({ img, title }) {
  return (
    <div className="bg-white rounded-[10px] w-[6.25rem] flex items-center flex-col pt-s-15 px-s-15">
      <img src={img} className="w-[3.125rem] h-[3.125rem]" />
      <p className="mt-m-20 mb-m-10 text-small font-small font-lexend text-center">
        {title}
      </p>
    </div>
  );
}

export default CategoryCard;
