import { label } from "framer-motion/client";
import React, { useState } from "react";
import { FaCogs } from "react-icons/fa";
import {
  SiJavascript,
  SiHtml5,
  SiMongodb,
  SiMysql,
  SiReact,
  SiNextdotjs,
  SiExpress,
  SiTailwindcss,
  SiGit,
  SiVercel,
  SiPostman,
  SiCss3,
  SiBootstrap,
  SiNodedotjs,
  SiPython,
} from "react-icons/si";

const categories = ["Languages", "JS Frameworks", "Database", "Other Tech"];

const skills = {
  Languages: [
    { icon: <SiJavascript color="#f0db4f" />, label: "JavaScript" },
    { icon: <SiJavascript color="#f0db4f" />, label: "ES6" },
    { icon: <SiHtml5 color="#e44d26" />, label: "HTML5" },
    { icon: <SiPython color="#50A2FF" />, label: "Python" },
  ],
  "JS Frameworks": [
    { icon: <SiReact color="#61DBFB" />, label: "React" },
    { icon: <SiNextdotjs color="#fff" />, label: "Next.js" },
    { icon: <SiExpress color="#a9a9a9" />, label: "Express.js" },
    { icon: <SiNodedotjs color="#fff" />, label: "Node.js" },
  ],
  Database: [
    { icon: <SiMongodb color="#4DB33D" />, label: "MongoDB" },
    { icon: <SiMysql color="#00758F" />, label: "MySQL" },
  ],
  "Other Tech": [
    { icon: <FaCogs color="#6C63FF" />, label: "REST APIs" },
    { icon: <SiGit color="#F1502F" />, label: "Git" },
    { icon: <SiPostman color="#FF6C37" />, label: "Postman" },
    { icon: <SiVercel color="#fff" />, label: "Vercel" },
    { icon: <SiTailwindcss color="#38B2AC" />, label: "TailwindCSS" },
    { icon: <SiCss3 color="#2B7FFF" />, label: "CSS3" },
    { icon: <SiBootstrap color="#AD46FF" />, label: "BootStrap" },
  ],
};

const Skills = () => {
  const [activeTab, setActiveTab] = useState("Languages");
  console.log("hello");

  return (
    <div
      id="tools"
      className="mt-28 px-1 md:px-6 text-white flex flex-col items-center"
    >
      <p className="text-[#848484] uppercase text-sm md:text-xl tracking-[1px]">
        Code Skills
      </p>
      <h1 className="text-3xl md:text-5xl text-center mt-5 font-bold">
        Tools I Use to Build
      </h1>
      <div className="z-10 mt-5 w-60 h-[2px] bg-white" />
      <span className="text-[#848484] mt-8 tracking-[1px] max-w-4xl text-center">
        These are the tools and technologies I’ve learned so far while building
        real-world projects. I’m always exploring and growing my stack as I
        continue my journey in full-stack development.
      </span>

      <div className="mt-13 flex flex-wrap justify-center gap-4">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveTab(category)}
            className={`px-4 py-2.5 rounded-3xl cursor-pointer font-medium border 
            ${
              activeTab === category
                ? "bg-white text-black"
                : "bg-[#343333] text-white hover:bg-white/10"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {skills[activeTab]?.map((skill, idx) => (
          <div
            key={idx}
            className="bg-[#1a1a1a] hover:bg-[#2a2a2a] duration-300 hover:scale-110 cursor-pointer  transition p-6 rounded-xl flex flex-col justify-center items-center shadow border border-gray-700 w-[180px]"
          >
            <div className="text-4xl mb-3">{skill.icon}</div>
            <h3 className="text-lg font-semibold">{skill.label}</h3>
            <p className="text-xs text-gray-400 mt-1">{activeTab}</p>
          </div>
        ))}
        {skills[activeTab]?.length === 0 && (
          <p className="text-gray-500 col-span-full text-center">
            No skills added yet for {activeTab}.
          </p>
        )}
      </div>
    </div>
  );
};

export default Skills;
