import React, { useState } from "react";
import theme_pattern from "/theme_pattern.svg";
import mail_icon from "/mail_icon.svg";
import location_icon from "/location_icon.svg";
import call_icon from "/call_icon.svg";

const Contact = () => {
  const [result, setResult] = useState("");
  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "1bc40a1f-81fb-46d3-8188-232caa77d447");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div
      id="contact"
      className="flex flex-col items-center justify-center gap-14 my-20 mx-[150px]"
    >
      <div className="relative">
        <h1 className="py-0 px-7 text-[50px] font-semibold">Get in touch</h1>
        <img
          className="absolute bottom-0 right-0 z-[-1]"
          src={theme_pattern}
          alt=""
        />
      </div>
      <div className="flex gap-20">
        <div className="flex flex-col gap-7">
          <h1 className="text-[30px] font-bold bg-text1 bg-clip-text text-transparent">
            Contact Me
          </h1>
          <p className="max-w-[550px] text-black text-lg">
            A simple step away to connect with me
          </p>
          <div className="flex flex-col gap-7 text-black text-[22px]">
            {[
              { icon: mail_icon, text: "sanarung.subba@gmail.com" },
              { icon: call_icon, text: "+977 9843641135" },
              { icon: location_icon, text: "Bhaisepati, Lalitpur" },
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-5">
                <img className="" src={item.icon} alt="" /> <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
        <form onSubmit={onSubmit} className="flex flex-col items-start gap-7">
          <label htmlFor="" className="text-black text-[22px] font-medium">
            Your Name
          </label>
          <input
            className="border-solid border-[1px] border-black w-[700px] h-[78px] pl-5 rounded-[4px] bg-white text-black text-[20px]"
            type="text"
            placeholder="Enter your name"
            name="name"
          />
          <label className="text-black text-[22px] font-medium" htmlFor="">
            Your Email
          </label>
          <input
            className="border-solid border-[1px] border-black w-[700px] h-[78px] pl-5 rounded-[4px] bg-white text-black text-[20px]"
            type="email"
            placeholder="Enter your email"
            name="email"
          />
          <label className="text-black text-[22px] font-medium" htmlFor="">
            Write your message here
          </label>
          <textarea
            className="border-solid border-[1px] border-black w-[650px]  p-6 rounded-[4px] bg-white text-black text-[20px]"
            name="message"
            rows="8"
            placeholder="Enter your message"
          ></textarea>
          <button
            className="border-none text-black rounded-[50px] bg-button text-[22px] py-5 px-[60px] mb-12 cursor-pointer duration-300 hover:duration-300 hover:scale-110"
            type="submit"
          >
            Submit Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
