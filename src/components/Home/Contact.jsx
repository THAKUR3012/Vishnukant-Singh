import React from "react";
import {
  SiGithub,
  SiInstagram,
  SiLinkedin,
  SiMailboxdotorg,
} from "react-icons/si";

const Contact = () => {
  return (
    <div
      id="contact"
      className="mt-20 px-1 md:px-6 text-white flex flex-col items-center"
    >
      <p className="text-[#848484] uppercase text-sm md:text-xl tracking-[1px]">
        Connect with Me
      </p>
      <h1 className="text-3xl md:text-5xl mt-5 font-bold text-center">
        Let's Talk
      </h1>
      <div className="z-10 mt-5 w-60 h-[2px] bg-white" />
      <span className="text-[#848484] mt-8 tracking-[1px] max-w-4xl text-center">
        Whether it's a potential project, a question, or just a hello — I'm
        always open to connect and collaborate.
      </span>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-10">
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

        <button className="px-4 py-2.5 flex justify-center items-center gap-3 border bg-[#343333] rounded-3xl cursor-not-allowed">
          <SiInstagram />
          <a
            href="/"
            className="block text-white text-center cursor-not-allowed"
          >
            Instagram
          </a>
        </button>
      </div>
    </div>
  );
};

export default Contact;
