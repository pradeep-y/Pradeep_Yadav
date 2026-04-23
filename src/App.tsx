import { useEffect, useState } from "react";

import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Cursor from "./components/Cursor";
import Loader from "./components/Loader";

import { initScrollReveal } from "./utils/scrollReveal";
import Skills from "./components/Skills";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Loader
    setTimeout(() => {
      setLoading(false);
    }, 1500);

    // Scroll animation
    initScrollReveal();

    const handleScroll = () => {
      const scroll = window.scrollY;
      const height =
        document.documentElement.scrollHeight - window.innerHeight;

      const progress = (scroll / height) * 100;

      const bar = document.querySelector(".scroll-bar") as HTMLElement;
      if (bar) bar.style.width = progress + "%";
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (loading) return <Loader />;

  return (
    <>
      
      <div className="scroll-bar"></div>

      <Cursor />
      <Header />
      <Home />
      <About />
      <Skills/>
      <Education />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;