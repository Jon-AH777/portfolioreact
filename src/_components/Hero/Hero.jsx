import React from "react";
import profile_img from "/profile.jpg";

const Hero = () => {
  return (
    <div id="home" className="flex items-center flex-col gap-5 mt-20">
      <img
        className="mt-[10px] h-[250px] rounded-[50%]"
        src={profile_img}
        alt=""
      />
      <h1 className="text-center w-[70%] text-[50px] font-bold">
        <span className="bg-text bg-clip-text text-transparent">
          Hello <br />
          I'm Sanarung Subba
        </span>
      </h1>
      <p className="w-[50%] text-center text-xl">
        I'm a frontend web developer
      </p>
      <div className="flex items-center mt-3 gap-6 text-xl font-medium mb-12">
        <div className="py-4 px-11 rounded bg-button cursor-pointer">
          Contact me
        </div>
        <div className="py-4 px-11 rounded border-[1px] border-solid border-black hover:border-resume">
          My resume
        </div>
      </div>
    </div>
  );
};

export default Hero;
