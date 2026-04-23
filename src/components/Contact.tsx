import { FaEnvelope, FaUser, FaTag } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="contact-modern" id="contact">
      <div className="container">

        <h2 className="contact-title">
          Contact <span>Me</span>
        </h2>
        <p className="contact-sub">Get In Touch</p>

        <div className="contact-box">
          <form>

            <div className="input-box">
              <FaUser />
              <input type="text" placeholder="Your Name" required />
            </div>

            <div className="input-box">
              <FaEnvelope />
              <input type="email" placeholder="Your Email" required />
            </div>

            <div className="input-box">
              <FaTag />
              <input type="text" placeholder="Subject" />
            </div>

            <div className="input-box textarea">
              <textarea placeholder="Your Message"></textarea>
            </div>

            <button className="btn contact-btn">
              Send Message 🚀
            </button>

          </form>
        </div>

      </div>
    </section>
  );
};

export default Contact;