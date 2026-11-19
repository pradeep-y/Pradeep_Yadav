import { useEffect, useRef } from "react";
import Typed from "typed.js";

const Home = () => {
  const el = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const typed = new Typed(el.current!, {
      strings: [
        ".NET Developer",
        "React Developer",
        "Banking Application Developer",
      ],
      typeSpeed: 60,
      backSpeed: 30,
      loop: true,
    });

    return () => typed.destroy();
  }, []);

  return (
    <div className="FirstElement" id="home">
      <div className="profile-photo">
        <img src="/Pradeep_Yadav/files/Pradeep1.png" alt="profile" />
      </div>

      <div className="profile-text">
        <h5>Hi I'm</h5>

        <h1 className="name">Pradeep Yadav</h1>

        <h3 className="typing-text">
          I'm <span ref={el}></span>
        </h3>

        <p>
          Welcome to my portfolio! I build secure, responsive banking
          applications using .NET, React, and PostgreSQL, from KYC and document
          management workflows to API-driven admin portals.
        </p>

        <div className="btn-group">
          <a
            href="./files/Pradeep_Yadav_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn active"
          >
            Download CV
          </a>

          <a href="mailto:pradeepsyadav2004@gmail.com" className="btn">
            Contact
          </a>
        </div>

        <div className="social">
          <a href="mailto:pradeepsyadav2004@gmail.com">
            <i className="fa fa-envelope"></i>
          </a>
          <a href="https://github.com/pradeep-y">
            <i className="fa-brands fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/pradeep-yadav-b14a35229/">
            <i className="fa-brands fa-linkedin"></i>
          </a>

          <div
            className="elfsight-app-16057538-fd9f-452c-8452-f55aaf6bf3a2"
            data-elfsight-app-lazy
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Home;