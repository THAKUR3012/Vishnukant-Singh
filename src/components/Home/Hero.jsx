const Hero = () => {
  return (
    <section
      id="home"
      className=" flex flex-col mt-10 md:mt-0 mb-18 items-center justify-center relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff11_1px,transparent_1px)] [background-size:40px_40px] z-0" />
      <h1 className="px-10 sm:px-0 tracking-[8px] z-10 text-5xl sm:text-6xl md:text-8xl lg:text-[205px] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-zinc-300 via-white to-zinc-500 text-center leading-tight">
        FULL STACK
        <br />
        DEVELOPER
      </h1>
      <p className="z-10 mt-5 text-sm text-white/80 tracking-[2px]">
        Scroll down for more information...
      </p>
      <div className="z-10 mt-3 w-130 h-[2px] bg-white/40" />
    </section>
  );
};

export default Hero;
