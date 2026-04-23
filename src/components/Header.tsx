import { useEffect, useState } from "react";

const Header = () => {
  const [active, setActive] = useState("#home");
  const [sticky, setSticky] = useState(false);

  const handleScroll = () => {
    const scrollY = window.scrollY;

    setSticky(scrollY > 1);

    const sections = document.querySelectorAll("section, div[id]");
    sections.forEach((section) => {
      const top = (section as HTMLElement).offsetTop - 60;
      const height = (section as HTMLElement).offsetHeight;
      const id = section.getAttribute("id");

      if (scrollY >= top && scrollY < top + height && id) {
        setActive(`#${id}`);
      }
    });

    if (scrollY === 0) {
      setActive("#home");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (id: string) => {
    const el = document.querySelector(id);
    if (!el) return;

    const top = (el as HTMLElement).offsetTop - 40;

    window.scrollTo({
      top,
      behavior: "smooth",
    });

    setActive(id);
  };

  return (
    <header className={`header-area ${sticky ? "sticky" : ""}`}>
      <div className="container">
        <div className="header">
          <a href="#" className="logo">
           <span className="signature"> <img src="/Pradeep_Yadav/files/padysign.png" alt="signature" /></span> 
            {/* <i className="fa fa-bolt"></i> */}
          </a>

          <ul className="navbar">
            {["home", "about","skills", "education","experience", "projects", "contact"].map(
              (item) => (
                <li key={item}>
                  <a
                    href={`#${item}`}
                    className={active === `#${item}` ? "active" : ""}
                    onClick={(e) => {
                      e.preventDefault();
                      handleClick(`#${item}`);
                    }}
                  >
                    {item}
                  </a>
                </li>
              )
            )}
          </ul>

          <div className="menu_icon">
            <i className="fa fa-bars"></i>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;