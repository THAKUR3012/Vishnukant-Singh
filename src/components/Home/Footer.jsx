import React from "react";
import { FaHeart, FaGlobe } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-black text-gray-400 border-t border-gray-700 py-8 mt-20 px-4">
      <div className="flex flex-col md:flex-row justify-between items-center max-w-6xl mx-auto gap-3 text-center md:text-left">
        <div className="flex items-center gap-2 text-sm">
          <span>Designed & Built with Vishnukant</span>
        </div>

        <div className="flex items-center gap-1 text-xs mt-1 md:mt-0">
          <FaGlobe size={12} />
          <span>© 2025 - All rights reserved</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
