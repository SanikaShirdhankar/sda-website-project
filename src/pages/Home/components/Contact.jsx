import React from "react";
import "../../../styles/contact.css";

const CTASection = () => {
  return (
    <section className="cta-section">
        <div className="container">
      <div className="cta-container">
        <h1 className="cta-title">
          Let’s build something <br />
          amazing together
        </h1>

        <button className="cta-btn">
          Get In Touch <span className="arrow">↗</span>
        </button>
      </div>

      <div className="cta-line"></div>
      </div>
    </section>
  );
};

export default CTASection;