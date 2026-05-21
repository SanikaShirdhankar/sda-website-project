import React from "react";
import "../../../styles/hero.css";
import { useEffect, useRef } from "react";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import img1 from "../../../assets/project/gal-1.jpg";
import img2 from "../../../assets/project/gal-2.jpg";
import img3 from "../../../assets/project/gal-3.jpg";
import img4 from "../../../assets/project/gal-4.jpg";
import img5 from "../../../assets/project/award-year.webp";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const heroRef = useRef();
  useEffect(() => {
    const ctx = gsap.context(() => {
      console.log(document.querySelectorAll(".line-inner"));
      gsap.set(".line-inner", { yPercent: 120 });

      gsap.to(".line-inner", {
        yPercent: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.2,
      });

    }, heroRef);

    return () => ctx.revert();
  }, []);


  return (
    <section className="hero-section d-flex align-items-center" ref={heroRef} >
      <div className="container">
        <div className="row align-items-center">

          {/* LEFT SIDE */}
          <div className="col-lg-4 d-none d-lg-flex justify-content-center">
            <div className="circle-text">
              <img src={img5} alt="" />
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="col-lg-8 text-center text-lg-start">
            <h1 className="hero-title" ref={titleRef}>
              <span className="line">
                <span className="line-inner"><b>You bring the Brand,</b></span>
              </span>

              <span className="line">
                <span className="line-inner"><b>We bring the Voice</b></span>
              </span>

              <span className="line">
                <span className="line-inner">and together we create magic</span>
              </span>
            </h1>

            <div className="hero-buttons mt-4">
              <a href="#" className="btn btn-dark rounded-pill px-4 py-2 me-3">
                Explore All Work →
              </a>
              <a href="#" className="btn btn-light rounded-pill px-4 py-2">
                Contact Me →
              </a>
            </div>

            {/* IMAGE CARDS */}
            <div className="image-row mt-5 d-flex flex-wrap justify-content-center justify-content-lg-start gap-3">
              <div className="img-card">
                <img src={img1} alt="" />
              </div>
              <div className="img-card">
                <img src={img2} alt="" />
              </div>
              <div className="img-card">
                <img src={img3} alt="" />
              </div>
              <div className="img-card">
                <img src={img4} alt="" />
              </div>
            </div>

          </div>

        </div>
      </div >

      {/* RED DOT */}
      < div className="red-dot" ></div >
    </section >
  );
}