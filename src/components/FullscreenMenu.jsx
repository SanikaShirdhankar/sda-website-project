import { useEffect, useRef } from "react";
import gsap from "gsap";
import "../styles/menu.css";
import logo from "../assets/logo/spicetree_red_logo.png";


export default function FullscreenMenu({ open, setOpen }) {
    const menuRef = useRef();

    useEffect(() => {
        if (open) {
            gsap.to(menuRef.current, {
                x: 0,
                duration: 0.7,
                ease: "power3.out"
            });

            gsap.from(".menu-item", {
                y: 80,
                opacity: 0,
                stagger: 0.1,
                delay: 0.2
            });
        } else {
            gsap.to(menuRef.current, {
                x: "100%",
                duration: 0.5
            });
        }
    }, [open]);

    return (
        <div className="menu" ref={menuRef}>
            {/* LEFT */}
            <div className="menu-left">

                <div className="menu-logo">
                    <img src={logo} alt="Logo" />
                </div>
                <ul>
                    <li className="menu-item">
                        <a href="#">
                            <span>01</span> HOME <b>+</b>
                        </a>
                    </li>
                    <li className="menu-item">
                        <a href="#">
                            <span>02</span> PAGES <b>+</b>
                        </a>
                    </li>
                    <li className="menu-item">
                        <a href="#">
                            <span>03</span> PORTFOLIO <b>+</b>
                        </a>
                    </li>
                    <li className="menu-item">
                        <a href="#">
                            <span>04</span> BLOG <b>+</b>
                        </a>
                    </li>
                </ul>
            </div>

            {/* RIGHT */}
            <div className="menu-right">
                <button className="close" onClick={() => setOpen(false)}>
                    ✕
                </button>

                <div className="contact">
                    <p>+61404093 954</p>
                    <p>hello contact@diego.com</p>
                    <p>If in doubt. reach out</p>
                </div>

                <div className="socials">
                    <p>Dribbble</p>
                    <p>Instagram</p>
                    <p>Linkedin</p>
                    <p>Behance</p>
                </div>
            </div>
        </div>
    );
}