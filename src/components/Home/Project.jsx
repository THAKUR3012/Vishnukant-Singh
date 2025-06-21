import React from "react";
import { motion } from "framer-motion";
import { SiReact } from "react-icons/si";

const projects = [
  {
    id: 1,
    title: "Real-time Chat Application",
    description:
      "A real-time chat app with instant messaging, user login, and live typing indicators using Socket.io.",
    tags: ["React", "Node.js", "Socket.io", "MongoDB", "TailwindCSS"],
    year: "2024",
    link: "/",
  },
  {
    id: 2,
    title: "E Commerce Website",
    description:
      "An online store with product listings, cart functionality, and secure checkout flow using Stripe.",
    tags: ["React", "Redux-toolkits", "MongoDB", "Node.js", "TailwindCSS"],
    year: "2025",
    link: "/",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description:
      "A personal portfolio showcasing my projects, skills, and contact information with a sleek UI.",
    tags: ["React", "Framer Motion", "TailwindCSS"],
    year: "2025",
    link: "#",
  },
];

const Project = () => {
  return (
    <div
      id="projects"
      className="mt-28 px-1 md:px-6 text-white flex flex-col items-center overflow-hidden"
    >
      <p className="text-[#848484] uppercase text-sm md:text-xl tracking-[1px]">
        Code Gallery
      </p>
      <h1 className="text-3xl md:text-5xl text-center mt-5 font-bold">
        Things I’ve Built
      </h1>
      <div className="z-10 mt-5 w-60 h-[2px] bg-white" />
      <span className="text-[#848484] mt-8 tracking-[1px] max-w-4xl text-center">
        Projects I built while learning full-stack development, exploring tools
        like React, Node.js, and MongoDB—each one sharpening my skills and
        understanding.
      </span>

      <div className="relative mt-20 w-full max-w-6xl ">
        <div className="absolute left-7 md:left-1/2 transform -translate-x-1/2 h-full w-[2px] bg-white/30 z-0" />
        {projects.map((project, index) => {
          const isLeft = index % 2 === 0;
          console.log(isLeft);
          return (
            <div
              key={project.id}
              className="mb-20 flex flex-col md:flex-row items-center w-full relative z-10"
            >
              <div
                className={`hidden  md:block md:w-1/2  ${
                  isLeft ? "" : "order-2"
                }`}
              />
              <div className="absolute  left-7 md:left-1/2 transform -translate-x-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center border border-gray-400 shadow z-30">
                <SiReact className="text-black " />
                <span
                  className={`hidden md:block absolute text-xxs text-gray-400 top-3 ${
                    isLeft ? "right-20" : "left-20"
                  }`}
                >
                  {project.year}
                </span>
              </div>

              <div
                className={`mt-10 md:w-1/2  ${
                  isLeft ? "mr-8 md:mr-0" : "ml-34 w-full md:ml-0 pl-0"
                }  ${isLeft ? "pr-10 md:pr-10 " : "pl-10 md:pl-10 md:order-1"}`}
              >
                <motion.div
                  initial={{ x: isLeft ? 200 : -200, opacity: 0 }}
                  whileInView={{ x: isLeft ? 60 : -60, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="bg-[#1a1a1a] w-[16rem] md:w-full p-6 rounded-xl shadow-xl border-b-2 border-b-white border border-gray-800"
                >
                  <p className="text-sm text-gray-400 mb-2 uppercase">
                    Project {project.id}
                  </p>
                  <h3 className="text-2xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-3">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="bg-gray-800 text-sm px-3 py-1 rounded-4xl text-gray-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-white hover:underline"
                  >
                    Visit project ↗
                  </a>
                </motion.div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Project;
