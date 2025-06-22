import React from "react";

const Collaborate = () => {
  return (
    <div className="mt-28 px-1 md:px-6 text-white flex flex-col items-center">
      <p className="text-[#848484] uppercase text-sm md:text-xl tracking-[1px]">
        Let's Collaborate
      </p>
      <h1 className="text-3xl md:text-5xl mt-5 font-bold text-center">
        Open to Group Projects
      </h1>
      <div className="z-10 mt-5 w-60 h-[2px] bg-white" />
      <p className="text-[#b0b0b0] mt-8 max-w-3xl text-center tracking-[0.5px] leading-relaxed">
        I’m currently open to collaborating on exciting full-stack projects with
        fellow developers. Whether it’s building apps, exploring new tech, or
        solving real-world problems together — I’m ready to contribute, learn,
        and grow with a team.
      </p>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl">
        <div className="bg-[#1f1f1f] border border-gray-700 rounded-2xl p-6 text-left hover:scale-105 duration-300 transition-transform">
          <h3 className="text-xl font-semibold mb-2">🤝 Collaborate with Me</h3>
          <p className="text-sm text-gray-400">
            Interested in teaming up on a React, Node, or MERN project? Let’s
            build together and learn.
          </p>
        </div>
        <div className="bg-[#1f1f1f] border border-gray-700 rounded-2xl p-6 text-left hover:scale-105 duration-300 transition-transform">
          <h3 className="text-xl font-semibold mb-2">🚀 Open to Ideas</h3>
          <p className="text-sm text-gray-400">
            Got a unique idea or want to start something cool? I’d love to join
            your journey.
          </p>
        </div>
      </div>

      <div className="mt-10">
        <a
          href="mailto:vishnukantsingh782@gmail.com"
          className="px-6 py-3 bg-[#343333] border text-white font-medium rounded-full transition-all"
        >
          📧 Contact Me for Collaboration
        </a>
      </div>
    </div>
  );
};

export default Collaborate;
