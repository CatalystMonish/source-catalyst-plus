import React, { useState } from "react";
import { FirebaseFirestore } from '@capacitor-firebase/firestore';

function CardPostItem({
                        postId,
                        authorName = "Default Author",
                        authorIntro = "Default intro...",
                        postTitle = "Default Title",
                        postContent = "Default Content...",
                        imgSrc,
                        initialLikesCount = 0,
                      }) {
  const [likesCount, setLikesCount] = useState(initialLikesCount);
  const [isLiked, setIsLiked] = useState(false);

  const handleLikeClick = async () => {
    // Toggle the like state
    setIsLiked(!isLiked);

    // Update the local state
    const newLikesCount = isLiked ? likesCount - 1 : likesCount + 1;
    setLikesCount(newLikesCount);

    try {
      await FirebaseFirestore.setDocument({
        reference: `posts/${postId}`,
        data: { likes: newLikesCount },
        merge: true  // The merge option ensures other fields aren't overwritten
      });
    } catch (error) {
      console.error("Error updating likes in Firestore:", error);
    }
  };

  return (
    <div className="rounded-xl bg-white p-s-15">
      <div className="flex">
        <img
          src={imgSrc}
          alt="profile_photo"
          className="h-[2.5rem] w-[2.5rem] rounded-full"
        />
        <div className="ml-m-10 flex flex-col">
          <p className="font-lexend text-label font-label ">{authorName}</p>
          <p className="font-lexend text-small-light font-small-light text-text-light">
            {authorIntro}
          </p>
        </div>
      </div>
      <p className="mt-m-15 font-lexend text-content font-content">
        {postTitle}
      </p>
      <p className="mt-m-15 font-lexend text-content-body font-content-body text-text-light">
        {postContent}
      </p>
      <div className="mt-m-10 flex items-center">
        <div className="mt-m-10 flex items-center">
          <svg
            onClick={handleLikeClick}
            xmlns="http://www.w3.org/2000/svg"
            fill={isLiked ? "currentColor" : "none"}
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-[1.25rem] w-[1.25rem] cursor-pointer text-text-light"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
          </svg>
          <p className="ml-[0.1875rem] font-lexend text-small-light font-small-light text-text-light">
            {likesCount}
          </p>
        </div>
      </div>
    </div>
  );
}

export default CardPostItem;
