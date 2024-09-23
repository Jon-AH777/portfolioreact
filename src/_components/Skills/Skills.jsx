import React from "react";
import mySkill_data from "../../skills_data";

const Skills = () => {
  // Duplicate the skill data to create an infinite scroll effect
  const duplicatedSkillData = [...mySkill_data, ...mySkill_data];

  return (
    <div id="skills" className="flex flex-col items-center justify-center">
      <h1 className="text-[30px] md:text-[50px] font-bold">Skills</h1>
      <div className="relative w-[90%] max-w-[1536px] h-[100px] mt-[5rem] overflow-hidden mask-image-linear-gradient">
        <div className="absolute flex space-x-5 md:space-x-10 animate-scrollLeft">
          {duplicatedSkillData.map((item, index) => (
            <div
              key={item.id || index}
              className="w-[150px] md:w-[200px] h-[100px] rounded-[6px] flex flex-col items-center justify-center duration-300 hover:transform hover:scale-110"
              style={{
                animationDelay: `calc(30s / 8 * (8 - ${
                  (index % mySkill_data.length) + 1
                }) * -1)`,
              }}
            >
              <img className="object-cover" src={item.img} alt={item.name} />
              <p className="font-semibold text-lg md:text-2xl text-center">
                {item.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
