
const projects = [
  {
    title: "AMAR-ENTERPRISE",
    desc: "Building a modern enterprise solution.",
    img: "/Pradeep_Yadav/files/amarEnterprises.png",
    viewLink: "https://github.com/pradeep-y/AMAR_ENTERPRISES",
    liveLink: "https://amar-enterprises.netlify.app/",
  },
  {
    title: "Medical Web Template",
    desc: "A responsive medical website  built with React.",
    img: "/Pradeep_Yadav/files/Medical.png",
    viewLink: "https://github.com/pradeep-y/MEDICAL_WEB_TEMP",
    liveLink: "https://medicalwebtemp.netlify.app/",
  },
  {
    title: "Security UI Template",
    desc: "A modern security-focused UI template.",
    img: "/Pradeep_Yadav/files/Security.png",
    viewLink: "https://github.com/pradeep-y/fenrir-frontend-challenge",
    liveLink: "https://fenrir-frontend-challenge-n8o4j0v70.vercel.app/",
  },
];

const Projects = () => {
  return (
    <section className="project-content" id="projects">
      <div className="container">
        <div className="project-title">
          <h4>My Projects</h4>
          <p>Discover my projects, where creativity meets innovation</p>
        </div>

        <div className="projects">
          {projects.map((item, index) => (
            <div
              className="project-card"
              key={index}
              style={{ position: "relative" }} // important
            >
              
              <div
                className="project-img"
                style={{ pointerEvents: "none" }} // image block na kare click
              >
                <img src={item.img} alt={item.title} />
              </div>

              <h4>{item.title}</h4>
              <p>{item.desc}</p>

              <div
                className="project-btns"
                style={{
                  position: "relative",
                  zIndex: 10, // 🔥 sabse important
                }}
              >
                <a
                  href={item.viewLink}
                  target="_blank"
                  rel="noreferrer"
                  className="btn"
                  style={{ position: "relative", zIndex: 11 }}
                >
                  <i className="fa fa-github"></i> View
                </a>

                <a
                  href={item.liveLink}
                  target="_blank"
                  rel="noreferrer"
                  className="btn"
                  style={{ position: "relative", zIndex: 11 }}
                >
                  <i className="fa fa-external-link"></i> Live
                </a>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;