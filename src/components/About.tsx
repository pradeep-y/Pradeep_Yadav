import Tilt from "react-parallax-tilt";

const About = () => {
  return (
    <section className="about-modern" id="about">
      <div className="container about-flex">

        {/* LEFT */}
        <div className="about-left">
          <h2>
            About <span>Me</span>
          </h2>

          <p>
            I am a <span>.NET and React Developer</span> who builds secure,
            responsive banking applications.
          </p>

          <p>
            I have worked on <span>DKYC, CKYC, REKYC, and DMS platforms</span>,
            creating 20+ reusable UI components and end-to-end workflows with{" "}
            <span>React, TypeScript, and Tailwind CSS</span>.
          </p>

          <p>
            On the backend, I work with <span>ASP.NET Core</span> (Clean
            Architecture) and <span>PostgreSQL</span>, and I am currently
            expanding into <span>Node.js, Express, and MongoDB</span>.
          </p>

          <p>
            I am passionate about <span>continuous learning</span> and building
            real-world solutions.
          </p>
        </div>

        {/* RIGHT */}
        <div className="about-right">
          <Tilt glareEnable glareMaxOpacity={0.4} scale={1.05}>
            <div className="about-card">
              <div className="about-badge">🏦 Banking Domain Experience</div>
              <div className="about-badge">⚙️ .NET + React</div>
              <div className="about-badge">🧩 20+ Reusable Components</div>
            </div>
          </Tilt>
        </div>

      </div>
    </section>
  );
};

export default About;