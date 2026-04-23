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
            I am a <span>Full Stack Developer</span> with strong expertise in
            frontend technologies like React, JavaScript, HTML, CSS, and Tailwind CSS.
          </p>

          <p>
            I have hands-on experience building scalable applications such as{" "}
            <span>DKYC, DMS, and CKYC platforms</span>.
          </p>

          <p>
            I work with databases like <span>MySQL</span> and backend technologies
            including <span>.NET Core</span> and <span>Python</span>.
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
              <div className="about-badge">🚀 Passionate Developer</div>
              <div className="about-badge">💡 Problem Solver</div>
              <div className="about-badge">⚡ Fast Learner</div>
            </div>
          </Tilt>
        </div>

      </div>
    </section>
  );
};

export default About;