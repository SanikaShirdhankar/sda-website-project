import React from "react";
import "../styles/footer.css";
import logo from "../assets/logo/spicetree_red_logo.png";
const Footer = () => {
  return (
    <footer className="footer">
        <div className="container">
      <div className="footer-top">
        {/* Left Logo */}
        <div className="footer-logo">
           <img src={logo} alt="Logo" />
        </div>

        {/* Right Heading */}
        <h1 className="footer-heading">SAY HELLO!</h1>
      </div>

      <div className="footer-divider"></div>

      <div className="footer-bottom">
       

        <div className="social-links">
          <a href="#">Facebook ↗</a>
          <a href="#">Twitter ↗</a>
          <a href="#">Instagram ↗</a>
          <a href="#">LinkedIn ↗</a>
        </div>

        <p className="copyright">Copyright © 2026</p>
      </div>

      {/* Scroll to top button */}
      <button
        className="scroll-top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        ↑
      </button>
      </div>
    </footer>
  );
};

export default Footer;