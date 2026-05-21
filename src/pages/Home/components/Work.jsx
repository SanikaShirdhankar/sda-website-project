

import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


import "../../../styles/work.css";
import img1 from "../../../assets/project/gal-5.jpg";
import img2 from "../../../assets/project/gal-6.jpg";
import img3 from "../../../assets/project/gal-8.jpg";
import img4 from "../../../assets/project/gal-4.jpg";
import img5 from "../../../assets/project/award-year.webp";
import img6 from "../../../assets/project/gal-9.jpg";
import img7 from "../../../assets/project/gal-7.jpg";
import img8 from "../../../assets/project/gal-10.jpg";
import img9 from "../../../assets/project/gal-11.jpg";
const images = [img1, img2, img3, img4, img6, img7, img8, img9];
gsap.registerPlugin(ScrollTrigger);

export default function HeroGallery() {
  const [activeImage, setActiveImage] = useState(null);
  const ref = useRef(null);

    useEffect(() => {
        const lines = ref.current.querySelectorAll(".line");

        lines.forEach((line) => {
            gsap.fromTo(
                line,
                { color: "#555" }, // default grey
                {
                    color: "#ab0418", // red OR "#000" for black
                    scrollTrigger: {
                        trigger: line,
                        start: "top 5%",
                        end: "top 20%",
                        scrub: true,
                    },
                }
            );
        });
    }, []);

  return (
    <div className="hero-container container-fluid">
      
      {/* BACKGROUND IMAGE */}
      {activeImage && (
        <div
          className="hero-bg"
          style={{ backgroundImage: `url(${activeImage})` }}
        />
      )}

      <div className="row align-items-center h-100">

        {/* LEFT - IMAGE */}
        <div className="col-md-4 text-center">
          <div className="circle-text">
            <img src={img5} alt="" />
          </div>
        </div>

        {/* RIGHT - CONTENT */}
        <div className="col-md-8">
          <div className={`hero-content ${activeImage ? "hide" : ""}`}>
         

             <h1 className="hero-title" ref={ref}>
              <span className="line">
                <span className="line-inner"><b>You bring the Brand,</b></span>
              </span>

              <span className="line">
                <span className="line-inner"><b>We bring the Voice</b></span>
              </span>

              <span className="line">
                <span className="line-inner"> and together we create magic</span>
              </span>
            </h1>

            <p>
              We build websites, apps & campaigns that actually move
              the needle for growing brands.
            </p>

            <div className="buttons">
              <button className="btn-primary">Explore All Work ↗</button>
              <button className="btn-secondary">Contact Me ↗</button>
            </div>
          </div>
        </div>

        {/* THUMBNAILS */}
        <div className="col-md-12">
          <div className="thumbnail-row">
            {images.map((img, index) => (
              <div
                key={index}
                className="thumb"
                onMouseEnter={() => setActiveImage(img)}
                onMouseLeave={() => setActiveImage(null)}
              >
                <img src={img} alt="" />
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}