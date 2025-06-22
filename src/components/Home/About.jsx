import React from "react";
import { BiSolidDownload } from "react-icons/bi";
import { SiGithub, SiLinkedin, SiMailboxdotorg } from "react-icons/si";

const About = () => {
  // console.log("hello");
  return (
    <div
      id="about"
      className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-30 text-white"
    >
      <div className=" w-full md:w-[600px]  border rounded-4xl">
        <img
          src="/public/profile.jpg"
          alt="Profile"
          className="p-2 rounded-4xl"
        />
      </div>
      <div className="">
        <h3 className=" px-4 max-w-[8rem] py-2.5 border bg-[#343333] rounded-3xl text-white text-lg text-center font-semibold">
          About Me
        </h3>
        <p className="mt-8 font-bold text-xl">Hey , I'm</p>
        <h1 className="mt-5 font-bold text-4xl tracking-[1.5px] ">
          Vishnukant Singh
        </h1>
        <p className="mt-5 leading-8 tracking-[1.5px]">
          Hey ! I’m a passionate <b> MERN stack developer </b> with a strong
          foundation in building responsive and user-friendly web applications.
          I’ve been working with technologies like{" "}
          <b> MongoDB, Express.js, React.js, and Node.js, </b> and I enjoy
          turning ideas into clean, functional interfaces.
          <b> As a fresher, </b> I’m always learning and ready to take on
          real-world challenges. Let’s create something amazing together! 🚀
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-5">
          <button className="px-4 py-2.5 flex justify-center items-center gap-3 border bg-[#343333] rounded-3xl cursor-pointer">
            <SiMailboxdotorg />
            <a
              href="mailto:vishnukantsingh782@gmail.com"
              className="block text-white text-center"
            >
              Email
            </a>
          </button>

          <button className="px-4 py-2.5 flex justify-center items-center gap-3  border bg-[#343333] rounded-3xl cursor-pointer">
            <SiLinkedin />
            <a
              href="https://www.linkedin.com/in/vishnukant-singh-4418292a7"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-white text-center"
            >
              LinkedIn
            </a>
          </button>

          <button className="px-4 py-2.5 flex justify-center items-center gap-3 border bg-[#343333] rounded-3xl cursor-pointer">
            <SiGithub />
            <a
              href="https://github.com/vishnukantsingh782" // change if different
              target="_blank"
              rel="noopener noreferrer"
              className="block text-white text-center"
            >
              GitHub
            </a>
          </button>

          <button className="px-4 py-2.5 flex justify-center items-center gap-3 border bg-[#343333] rounded-3xl cursor-pointer">
            <BiSolidDownload />
            <a
              href="/resume.pdf"
              download="Vishnukant_Resume.pdf"
              className="block text-white text-center"
            >
              Resume
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
