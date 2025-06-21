import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import Hero from "./Home/Hero";
import TechSlider from "./Home/TechSlider";
import About from "./Home/About";
import Project from "./Home/Project";
import Skills from "./Home/Skills";
import Academic from "./Home/Academic";
import Fresher from "./Home/Fersher";
import Contact from "./Home/Contact";
import Collaborate from "./Home/Collaborate";
import Footer from "./Home/Footer";

const Home = () => {
  const messages = [
    "नमस्ते",
    "Hello",
    "Hola",
    "Bonjour",
    "Hallo",
    "Ciao",
    "שלום",
    "Halo",
    "Hei",
    "Olá",
    "Привет",
    "こんにちは",
    "你好",
    "안녕하세요",
    "Merhaba",
    "Hej",
    "Hej",
    "হ্যালো",
    "హలో",
    "ಹಲೋ",
    "สวัสดี",
    "Xin chào",
    "Halo",
    "Բարեւ",
    "Hallo",
    "Salam",
    "Tere",
    "Բարեւ",
    "Shalom",
    "Selam",
    "Kamusta",
    "Sawubona",
    "Mhoro",
    "Habari",
    "Salve",
    "Aloha",
    "Halló",
    "Moien",
    "Sveiki",
    "Sveikas",
    "Pozdrav",
    "Zdravo",
    "Szia",
    "Cześć",
    "Ahoj",
    "Hallo",
  ];

  const [loading, setLoading] = useState(true);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  useEffect(() => {
    if (!loading) return;

    const interval = setInterval(() => {
      setCurrentMessageIndex((prev) => (prev + 1) % messages.length);
    }, 100);

    const timeout = setTimeout(() => {
      setLoading(false);
      clearInterval(interval);
    }, 5000);

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [loading]);

  if (loading) {
    return (
      <div className="bg-black font-bold text-white h-[100vh] w-full flex flex-col justify-center items-center gap-5 tracking-wider">
        <p className="text-[#cdcaca] tracking-[4px]">Loading...</p>
        <div className="text-6xl md:text-7xl font-bold">
          {messages[currentMessageIndex]}
        </div>
        <p className="text-[#e2dddd] text-center">
          Please wait, we're getting something awesome ready for you...
        </p>
      </div>
    );
  }

  return (
    <div className="sm:p-1 md:p-3 lg:pp-[2rem]">
      <NavBar />
      <Hero />
      <TechSlider direction={true} />
      <TechSlider direction={false} />
      <About />
      <Project />
      <Skills />
      <Academic />
      <Fresher />
      <Collaborate />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
