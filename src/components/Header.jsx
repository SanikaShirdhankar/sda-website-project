import { useState } from "react";
import FullscreenMenu from "./FullscreenMenu";
import "../styles/header.css";
import logo from "../assets/logo/spicetree_red_logo.png";

export default function Header() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {

    setOpen(!open);
  };


  return (
    <>
      <header className="header">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className={`hamburger ${open ? "active" : ""}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
        </div>

        <div className="marquee">
          <a href="tel:+61404093954" className="marquee-link">
            <div className="marquee-content">
              <span>GET IN TOUCH • +61 404 093 954 •</span>
              <span>GET IN TOUCH • +61 404 093 954 •</span>
              <span>GET IN TOUCH • +61 404 093 954 •</span>
            </div>
          </a>
        </div>
      </header>

      <FullscreenMenu open={open} setOpen={setOpen} />
    </>
  );
}