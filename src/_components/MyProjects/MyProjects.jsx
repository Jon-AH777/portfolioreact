import React from "react";
import theme_pattern from "/theme_pattern.svg";
import arrow_icon from "/arrow_icon.svg";
import mywork_data from "../../mywork_data.js";

const MyProjects = () => {
  return (
    <div
      id="projects"
      className="flex flex-col items-center justify-center gap-[80px] my-20 mx-[170px]"
    >
      <div className="relative">
        <h1 className="py-0 px-7 text-[60px] font-semibold">My projects</h1>
        <img
          className="absolute bottom-0 right-0 z-[-1]"
          src={theme_pattern}
          alt=""
        />
      </div>
      <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
        {mywork_data.map((work, index) => {
          return (
            <img
              className="box-border w-[419px] h-[280px] duration-300 cursor-pointer hover:transform hover:scale-110 hover:rounded-[10px]"
              key={work.id || index}
              src={work.w_img}
              alt=""
            />
          );
        })}
      </div>
      <div className="flex gap-4 rounded-[50px] border-2 border-solid border-black px-7 py-[15px] text-[20px] font-medium mb-20 duration-500 cursor-pointer">
        <p>Show More</p>
      </div>
    </div>
  );
};

export default MyProjects;
