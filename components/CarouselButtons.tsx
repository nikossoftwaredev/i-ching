"use client";

import { MdOutlineNavigateBefore, MdOutlineNavigateNext } from "react-icons/md";

const CarouseButtons = ({ scrollableDivId }: { scrollableDivId: string }) => {
  return (
    <div className="z-10 absolute top-0 left-0 w-full h-full flex justify-start items-center">
      <button
        onClick={() => {
          const scrollableDiv = document.getElementById(
            scrollableDivId
          ) as HTMLDivElement;
          scrollableDiv.scrollTo({
            left: -scrollableDiv.clientWidth, // Adjust the scroll amount as needed
            behavior: "smooth",
          });
        }}
        className="btn-circle opacity-80 text-base-300 bg-slate-500 flex items-center justify-center cursor-pointer hover:opacity-100 ml-2"
      >
        <MdOutlineNavigateBefore size={40} />
      </button>
      <button
        onClick={() => {
          const scrollableDiv = document.getElementById(
            scrollableDivId
          ) as HTMLDivElement;

          scrollableDiv.scrollTo({
            left: scrollableDiv.clientWidth, // Adjust the scroll amount as needed
            behavior: "smooth",
          });
        }}
        className="btn-circle opacity-80 text-base-300 bg-slate-500 flex items-center justify-center cursor-pointer hover:opacity-100 ml-auto mr-2"
      >
        <MdOutlineNavigateNext size={40} />
      </button>
    </div>
  );
};

export default CarouseButtons;
