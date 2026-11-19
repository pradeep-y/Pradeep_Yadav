import Tilt from "react-parallax-tilt";

import { FaReact, FaGitAlt } from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiTailwindcss,
  SiDotnet,
  SiSharp,
  SiPostgresql,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostman,
  SiVercel,
  SiNetlify,
  SiNginx,
} from "react-icons/si";

const skills = [
  { name: "React", icon: <FaReact /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "HTML", icon: <SiHtml5 /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  { name: "C#", icon: <SiSharp /> },
  { name: "ASP.NET Core", icon: <SiDotnet /> },
  { name: "PostgreSQL", icon: <SiPostgresql /> },
  { name: "Node.js", icon: <SiNodedotjs /> },
  { name: "Express", icon: <SiExpress /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "Git", icon: <FaGitAlt /> },
];

const tools = [
  { name: "VS Code", icon: "🖥️" },
  { name: "Chrome DevTools", icon: "🔧" },
  { name: "Postman", icon: <SiPostman /> },
  { name: "Nginx", icon: <SiNginx /> },
  { name: "Netlify", icon: <SiNetlify /> },
  { name: "Vercel", icon: <SiVercel /> },
];

const Skills = () => {
  return (
    <section className="about-modern" id="skills">
      <div className="container">

        {/* SAME HEADING CLASS */}
        <div className="skills-section">
          <h3 className="skills-title">
            My <span>Skills</span>
          </h3>

          <div className="skills-grid">
            {skills.map((skill) => (
              <Tilt key={skill.name} glareEnable={true} scale={1.05}>
                <div className="skill-card">
                  <div className="icon">{skill.icon}</div>
                  <span>{skill.name}</span>
                </div>
              </Tilt>
            ))}
          </div>
        </div>

        {/* TOOLS */}
        <div className="tools-section">
          <h3 className="skills-title">
            Tools <span>I Use</span>
          </h3>

          <div className="skills-grid">
            {tools.map((tool) => (
              <Tilt key={tool.name} glareEnable={true} scale={1.05}>
                <div className="skill-card">
                  <div className="icon">{tool.icon}</div>
                  <span>{tool.name}</span>
                </div>
              </Tilt>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;