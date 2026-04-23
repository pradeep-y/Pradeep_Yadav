import Tilt from "react-parallax-tilt";

import { FaReact, FaGitAlt } from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiFirebase,
  SiPostman,
  SiVercel,
} from "react-icons/si";

const skills = [
  { name: "React", icon: <FaReact /> },
  { name: "JS", icon: <SiJavascript /> },
  { name: "HTML", icon: "🌐" },
  { name: "Tailwind CSS", icon: "🎨" },
  { name: ".NET", icon: "⚡" },
  { name: "TS", icon: <SiTypescript /> },
  { name: "Git", icon: <FaGitAlt /> },
  { name: "MySQL", icon: "🗄️" },
  { name: "Python", icon: "🐍" },
  { name: "Firebase", icon: <SiFirebase /> },
];

const tools = [
  { name: "VS Code", icon: "🖥️" },
  { name: "Chrome DevTools", icon: "🔧" },
  { name: "Vercel", icon: <SiVercel /> },
  { name: "Netlify", icon: "🚀" },
  { name: "Postman", icon: <SiPostman /> },
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
            {skills.map((skill, i) => (
              <Tilt key={i} glareEnable={true} scale={1.05}>
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
            {tools.map((tool, i) => (
              <Tilt key={i} glareEnable={true} scale={1.05}>
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