const Education = () => {
  return (
    <>
      <section className="edu-exp-section" id="education">
        <h2 className="section-title">Education & Experience</h2>

        <div className="timeline-container">
          <div className="timeline-item left">
            <div className="content">
              <h3>Bachelor of Computer Science</h3>
              <p>Vivekanand Education Society College, Chembur</p>
              <p>CGPA: 8.51</p>
              <span>2021 - 2024</span>
            </div>
          </div>

          <div className="timeline-item right">
            <div className="content">
              <h3>Higher Secondary Certificate (HSC)</h3>
              <p>N.G. Acharya & D.K. Marathe College, Chembur</p>
              <p>Percentage: 87.33%</p>
              <span>2020 - 2021</span>
            </div>
          </div>

          <div className="timeline-item left">
            <div className="content">
              <h3>Secondary School Certificate (SSC)</h3>
              <p>Vinod Shukla High School & Jr. College</p>
              <p>Percentage: 75%</p>
              <span>2018 - 2019</span>
            </div>
          </div>
        </div>
      </section>

      <section className="experience-content" id="experience">
        <div className="container">
          <div className="experience-modern">
            <div className="exp-list">
              <div className="exp-card">
                <h3>.NET & React Developer</h3>
                <h4>AlphaFinSoft Pvt. Ltd.</h4>
                <span>June 2025 - Present</span>
                <p>
                  Building banking applications with ASP.NET Core (Clean
                  Architecture) and PostgreSQL, covering KYC verification, OTP
                  validation, consent management, and document processing. Led
                  frontend development across DKYC, CKYC, REKYC, DMS, and API
                  Gateway portals with 20+ reusable React components.
                </p>
              </div>

              <div className="exp-card">
                <h3>React Developer Intern</h3>
                <h4>AlphaFinSoft Pvt. Ltd.</h4>
                <span>April 2025 - June 2025</span>
                <p>
                  Designed and developed the DKYC and CKYC portals with fully
                  responsive UI using React.js and Tailwind CSS.
                </p>
              </div>

              <div className="exp-card">
                <h3>Web Developer (Freelance)</h3>
                <h4>Amar Enterprise</h4>
                <span>June 2024 - Feb 2025</span>
                <p>
                  Designed and developed a responsive company website with
                  contact forms and email notifications, deployed on Netlify.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Education;