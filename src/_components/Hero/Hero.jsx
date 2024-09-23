import React from "react";
import profile_img from "/profile.jpg";

const Hero = () => {
  return (
    <div id="home" className="flex items-center flex-col gap-[20px]">
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
      <div className="flex items-center mt-3 gap-6 text-[20px] font-medium mb-12">
        <div className="py-6 px-11 rounded-[50px] bg-button cursor-pointer hover:border-2 hover:border-solid hover:border-white">
          Contact me
        </div>
        <div className="py-6 px-11 rounded-[50px] border-2 border-solid border-white hover:border-resume">
          My resume
        </div>
      </div>
    </div>
  );
};

export default Hero;
