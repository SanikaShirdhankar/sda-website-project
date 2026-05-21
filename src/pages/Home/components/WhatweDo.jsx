
import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import "../../../styles/whatwedo.css";
import img5 from "../../../assets/project/ab-shape-img.png";

gsap.registerPlugin(ScrollTrigger);
export default function WhatWeDo() {
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
                        start: "top 60%",
                        end: "top 20%",
                        scrub: true,
                    },
                }
            );
        });
    }, []);
    return (
        <section className="what-we-do-section">
            <div className="container">

                {/* TOP SMALL TEXT */}
                <p className="tag">( WHAT WE DO )</p>

                {/* MAIN HEADING */}
                <h1 ref={ref} className="main-heading">
                    <span className="line">EFFECTIVE</span>
                    <span className="line">BRAND COMMUNICATION</span>
                </h1>

                <div className="row align-items-center mt-5">

                    {/* LEFT ICON */}
                    <div className="col-lg-5 text-center">
                        <img src={img5} alt="" className="flower " />
                    </div>

                    {/* RIGHT CONTENT */}
                    <div className="col-lg-7">
                        <p className="desc">
                            We are a 360 degree, full service digital marketing and advertising agency founded more than 19 years ago, with the aim of providing digital, communication and development solutions that are focused on Customer Engagement, Digital Transformation and Business Growth.
                        </p>

                        <p className="desc mt-3">
                            All you need is a voice that speaks precisely what the audience deeply wants to hear and that's the beginning of irreplaceable connection.
                        </p>

                        <a href="#" className="hover-link">
                            Learn more about adon
                        </a>
                    </div>

                </div>
            </div>
        </section>
    );
}