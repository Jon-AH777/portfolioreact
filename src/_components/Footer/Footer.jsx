import React from "react";
import footer_logo from "/logo.png";
import user_icon from "/usericon.jpg";

const Footer = () => {
  return (
    <div className="my-[50px] mx-[170px] flex flex-col flex-wrap gap-7">
      <div className="flex justify-between gap-5">
        <img className="h-full w-1/6" src={footer_logo} alt="" />
        <p className="text-[20px] max-w-[400px]">
          I am a frontend developer from, Nepal with 10 years of experience in
          companies like Microsoft, Tesla and Apple.
        </p>

        <div className="flex items-center gap-[35px]">
          <div className="flex gap-[30px] border-solid border-[1px] border-black py-5 px-7 rounded-[50px] bg-white pr-[80px]">
            <img className="h-[25px]" src={user_icon} alt="" />
            <input
              className="outline-none bg-transparent text-footerColor text-[18px] text-black"
              type="emial"
              placeholder="Enter your email"
            />
          </div>
          <div className="text-xl py-5 px-[50px] rounded-[50px] cursor-pointer bg-button duration-300 hover:scale-110 hover:duration-300">
            Subscribe
          </div>
        </div>
      </div>
      <hr />
      <div className="flex justify-between text-lg">
        <p>© 2024 Sanarung Subba. All rights reserved.</p>
        <div className="flex gap-[50px] mb-[50px]">
          <p>Terms of Services</p>
          <p>Privacy Policy</p>
          <p>Connect with me</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
