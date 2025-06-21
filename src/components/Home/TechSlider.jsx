import { FaDatabase, FaServer, FaLaptopCode, FaCode } from "react-icons/fa";
import {
  SiCss3,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
} from "react-icons/si";
import "../../index.css";

const skills = [
  { icon: <FaCode />, label: "Full-Stack" },
  { icon: <SiNodedotjs />, label: "Node.js" },
  { icon: <SiReact />, label: "React" },
  { icon: <FaDatabase />, label: "Database" },
  { icon: <FaServer />, label: "Backend" },
  { icon: <FaLaptopCode />, label: "Frontend" },
  { icon: <SiJavascript />, label: "JavaScript" },
  { icon: <SiHtml5 />, label: "HTML5" },
  { icon: <SiCss3 />, label: "CSS3" },
  { icon: <SiMongodb />, label: "MongoDB" },
  { icon: <SiNextdotjs />, label: "Next.js" },
];

const TechSlider = ({ direction }) => {
  const duplicatedSkills = [...skills, ...skills];
  return (
    <div className="marquee-wrapper bg-gray-950 shadow overflow-hidden py-4 text-white">
      <div
        className={`${direction ? "marquee-track" : "marquee-track-reverse"}`}
      >
        {duplicatedSkills.map((item, idx) => (
          <div
            key={idx}
            className="flex items-center gap-2 min-w-fit px-6 text-xl"
          >
            {item.icon}
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechSlider;
