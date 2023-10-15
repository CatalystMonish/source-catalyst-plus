import React from "react";
import { useNavigate } from "react-router-dom";

function VideoBlock() {
  const navigate = useNavigate();

  const openVideo = (async) => {
    navigate("/player");
  };

  return (
    <div>
      <div
        onClick={openVideo}
        className="my-m-10 flex rounded-md bg-light px-s-15 py-s-20"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 25 25"
          fill="currentColor"
          className="h-[1.25rem] w-[1.25rem] text-[#9B51E0]"
        >
          <path
            fillRule="evenodd"
            d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm14.024-.983a1.125 1.125 0 010 1.966l-5.603 3.113A1.125 1.125 0 019 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113z"
            clipRule="evenodd"
          />
        </svg>

        <p className="ml-m-10 font-lexend text-label font-label">
          Python Video
        </p>
      </div>
    </div>
  );
}

export default VideoBlock;
