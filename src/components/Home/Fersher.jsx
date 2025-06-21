import React from "react";
import { FaLaptopCode } from "react-icons/fa";

const Fresher = () => {
  return (
    <div
      id="experience"
      className="mt-10 md:mt-20 px-1 md:px-6 text-white flex flex-col items-center"
    >
      <p className="text-[#848484] uppercase text-sm md:text-xl tracking-[1px]">
        WORK EXPERIENCE
      </p>
      <h1 className="text-3xl md:text-5xl text-center mt-5 font-bold">
        My Developer Path
      </h1>
      <div className="z-10 mt-5 w-60 h-[2px] bg-white" />
      <span className="text-[#848484] mt-8 tracking-[1px] max-w-4xl text-center">
        The steps I’ve taken—from learning to building—to grow as a full-stack
        developer.
      </span>
      <div className="bg-[#1a1a1a] mt-10 border border-gray-800 rounded-xl p-6 w-full max-w-2xl shadow-lg text-white">
        <div className="flex items-center gap-4 mb-3">
          <FaLaptopCode className="text-green-400 text-2xl" />
          <div>
            <h3 className="text-xl font-semibold">Self-Taught Developer</h3>
            <p className="text-sm mt-2 text-gray-400">
              Fresher • Project-Based Experience
            </p>
          </div>
        </div>

        <ul className="list-disc ml-6 space-y-2 tracking-[1px] leading-6 text-sm text-gray-300">
          <li>Gained hands-on experience through real-world projects</li>
          <li>Built multiple full-stack apps using MERN stack</li>
          <li>Strong grasp of React, Node.js, MongoDB, and REST APIs</li>
          <li>Comfortable with Git, GitHub, deployment & responsive design</li>
          <li>Actively learning and improving through self-driven practice</li>
        </ul>
      </div>
    </div>
  );
};

export default Fresher;
