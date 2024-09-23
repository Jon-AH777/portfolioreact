import React from "react";
import theme_pattern from "/theme_pattern.svg";
import profile_img from "/portfolio.png";

const About = () => {
  return (
    <div
      id="about"
      className="flex flex-col items-center justify-center gap-[70px] my-10 mx-40 pb-20"
    >
      <div className="relative">
        <h1 className="py-0 px-[30px] text-[50px] font-semibold">About Me</h1>
        <img
          className="absolute bottom-0 right-0 z-[-1]"
          src={theme_pattern}
          alt=""
        />
      </div>
      <div className="flex flex-col gap-[80px]">
        <div className="flex gap-[80px]">
          <img className="h-[500px]" src={profile_img} alt="" />
          <div className="flex flex-col gap-5 text-[18px] font-medium">
            <p>
              I am a passionate and dedicated frontend web developer with a
              strong foundation in H TML, CSS, JavaScript, and modern frameworks
              like React and Next.js. Although I am yet to secure my first
              professional role, I have honed my skills through various personal
              projects and contributions to open-source communities.{" "}
            </p>
            <p>
              {" "}
              My focus is on creating responsive, user-friendly interfaces and
              seamless user experiences. I am eager to bring my creativity and
              technical expertise to a dynamic team where I can continue to grow
              and make a meaningful impact.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
