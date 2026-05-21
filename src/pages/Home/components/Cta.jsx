import React from "react";
import "../../../styles/cta.css";

const CTASection = () => {
  return (
    <section className="cta-section">
      <div className="cta-container">
        <div className="dot"></div>

        <h1 className="cta-title">
          Let’s build something <br />
          amazing together
        </h1>

        <button className="cta-btn">
          Get In Touch <span className="arrow">↗</span>
        </button>
      </div>

      <div className="cta-line"></div>
    </section>
  );
};

export default CTASection;