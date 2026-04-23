import ScrollReveal from "scrollreveal";

export const initScrollReveal = () => {
  const sr = ScrollReveal({
    distance: "60px",
    duration: 1200,
    delay: 100,
    reset: false,
  });

  sr.reveal(".header", { origin: "top" });

  sr.reveal(".profile-photo", { origin: "left" });
  sr.reveal(".profile-text", { origin: "right" });

  sr.reveal(".about-intro", { origin: "bottom" });

  sr.reveal(".skill-card", {
    origin: "bottom",
    interval: 100,
  });

  sr.reveal(".project-card", {
    origin: "bottom",
    interval: 150,
  });

  sr.reveal(".contact", { origin: "bottom" });
};