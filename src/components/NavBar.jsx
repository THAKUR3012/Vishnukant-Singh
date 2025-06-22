import React, { useState } from "react";
import {
  Home,
  User,
  Folder,
  Wrench,
  GraduationCap,
  Briefcase,
  Mail,
  Menu,
  X,
} from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full px-0 py-3 md:px-6 md:py-4 bg-black text-white flex justify-between items-center relative">
      <h1 className="font-bold text-2xl z-50">
        <a href="/">Vishnukant</a>
      </h1>
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden z-50 text-white"
      >
        {menuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <ul className="hidden md:flex items-center gap-8 bg-[#121212] border border-gray-700 px-8 py-4 rounded-full text-sm shadow tracking-[1px]">
        <NavItem icon={<Home size={16} />} href="#home" label="Home" />
        <NavItem icon={<User size={16} />} href="#about" label="About" />
        <NavItem
          icon={<Folder size={16} />}
          href="#projects"
          label="Projects"
        />
        <NavItem icon={<Wrench size={16} />} href="#tools" label="Tools" />
        <NavItem
          icon={<GraduationCap size={16} />}
          href="#education"
          label="Education"
        />
        <NavItem
          icon={<Briefcase size={16} />}
          href="#experience"
          label="Experience"
        />
        <NavItem icon={<Mail size={16} />} href="#contact" label="Contact" />
      </ul>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="absolute top-20 left-6 right-6 bg-[#121212] border border-gray-700 rounded-xl p-6 flex flex-col gap-4 md:hidden z-40 text-sm shadow-lg tracking-[1px]">
          <NavItem
            icon={<Home size={16} />}
            href="#home"
            label="Home"
            onClick={() => setMenuOpen(false)}
          />
          <NavItem
            icon={<User size={16} />}
            href="#about"
            label="About"
            onClick={() => setMenuOpen(false)}
          />
          <NavItem
            icon={<Folder size={16} />}
            href="#projects"
            label="Projects"
            onClick={() => setMenuOpen(false)}
          />
          <NavItem
            icon={<Wrench size={16} />}
            href="#tools"
            label="Tools"
            onClick={() => setMenuOpen(false)}
          />
          <NavItem
            icon={<GraduationCap size={16} />}
            href="#education"
            label="Education"
            onClick={() => setMenuOpen(false)}
          />
          <NavItem
            icon={<Briefcase size={16} />}
            href="#experience"
            label="Experience"
            onClick={() => setMenuOpen(false)}
          />
          <NavItem
            icon={<Mail size={16} />}
            href="#contact"
            label="Contact"
            onClick={() => setMenuOpen(false)}
          />
        </ul>
      )}

      {/* Avatar */}
      <div className="hidden md:flex items-center gap-2">
        <img
          src="/logo.png"
          alt="avatar"
          className="w-8 h-8 rounded-full border border-gray-600"
        />
      </div>
    </nav>
  );
};

const NavItem = ({ icon, href, label, onClick }) => (
  <li className="flex items-center gap-2">
    {icon}
    <a href={href} onClick={onClick} className="hover:text-gray-300">
      {label}
    </a>
  </li>
);

export default Navbar;
