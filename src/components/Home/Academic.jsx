import React, { useState, useEffect } from "react";
import { FaSchool, FaUniversity } from "react-icons/fa";

const educationData = [
  {
    icon: <FaUniversity className="text-yellow-400 text-2xl" />,
    title: "Bachelor of Science Information Technology (B.Sc-IT)",
    university: "Mumbai University, Mumbai",
    period: "August 2021 - April 2024",
    points: [
      "Made projects using React, Node.js, and MongoDB.",
      "Learned about databases, websites, and how computers work together.",
      "Worked in a team using Git and GitHub to manage code easily.",
    ],
  },
  {
    icon: <FaSchool className="text-yellow-400 text-2xl" />,
    title: "H.S.C - Commerce",
    university: "Maharashtra State Board, Mumbai",
    period: "2019 - 2021",
    points: [
      "Completed with distinction in Commerce stream",
      "Focused on subjects like Accounting, Economics, and IT",
      "Actively participated in school seminars and group projects",
    ],
  },
  {
    icon: <FaSchool className="text-yellow-400 text-2xl" />,
    title: "S.S.C Maharashtra State Board",
    university: "Pal Rajendra High School, Mumbai",
    period: "2018 - 2019",
    points: [
      "Completed secondary education with strong academic results",
      "Studied key subjects including Science, Mathematics, and English",
      "Built a solid foundation for further studies in technology",
    ],
  },
];

const Academic = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % educationData.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      id="education"
      className="mt-28 px-1 md:px-6 text-white flex flex-col items-center"
    >
      <p className="text-[#848484] uppercase text-sm md:text-xl tracking-[1px]">
        My Path
      </p>
      <h1 className="text-3xl md:text-5xl mt-5 font-bold text-center">
        Academic Journey
      </h1>
      <div className="z-10 mt-5 w-60 h-[2px] bg-white" />
      <span className="text-[#848484] mt-8 tracking-[1px] max-w-3xl text-center">
        Each step in my education shaped how I think, solve problems, and build
        smarter solutions as a developer.
      </span>

      <div className="relative w-full max-w-4xl min-h-[370px] md:min-h-[280px] mt-12 overflow-hidden">
        <div className="absolute transition-all duration-700 ease-in-out text-white w-full opacity-100 scale-100">
          <div className="bg-[#121212] border border-gray-700 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-2">
              {educationData[currentIndex].icon}
              <h2 className="text-xl tracking-[1px] font-bold">
                {educationData[currentIndex].title}
              </h2>
            </div>
            <p className="text-gray-400 mb-2">
              {educationData[currentIndex].university}
            </p>
            <p className="text-gray-500 text-sm mb-5">
              {educationData[currentIndex].period}
            </p>
            <ul className="list-disc ml-6 tracking-[1px] leading-6 space-y-1 text-sm text-gray-300">
              {educationData[currentIndex].points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Academic;
