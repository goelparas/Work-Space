import React from "react";
import image from "../../resources/Icons/Office.svg";
export const PromptMessage = () => {
  return (
    <div className="flex flex-col flex-grow justify-center items-center gap-2">
      <img src={image} className="w-40p" />
      <div>
        <h1 className="font-bold lg:text-2xl md:text-xl sm:text-base">Select Room to Start Chat ...</h1>
      </div>
    </div>
  );
};
