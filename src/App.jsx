import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./components/Home";

const App = () => {
  return (
    <div className="bg-black min-h-screen text-white px-[10px] md:px-[2rem]">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
