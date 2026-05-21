import React, { useState } from "react";
import "../../../styles/gallery.css";

import img1 from "../../../assets/project/gal-1.jpg";
import img2 from "../../../assets/project/gal-2.jpg";
import img3 from "../../../assets/project/gal-3.jpg";


export default function WorkSection() {
    const workData = [
        {
            title: "DIGITAL MARKETING",
            year: "2026",
            image: img1,
            heading1: "POWERING BRANDS",
            heading2: "DIGITALLY",
        },
        {
            title: "CREATIVE SERVICES",
            year: "2026",
            image: img2,
            heading1: "DESIGN THAT",
            heading2: "SPEAKS",
        },
        {
            title: "WEB BRANDING",
            year: "2026",
            image: img3,
            heading1: "BRANDING BEYOND ",
            heading2: "SCREENS",
        },
       
    ];

    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section className="work-section">
            <div className="container-fluid">
                <div className="row">

                    {/* LEFT IMAGE */}
                    <div className="col-lg-8 p-0">
                        <div className="image-wrapper">
                            <img
                                src={workData[activeIndex].image}
                                alt=""
                                className="main-image"
                            />

                            <div className="overlay-text">
                                <h1>{workData[activeIndex].heading1}</h1>
                                <h1 className="light">
                                    {workData[activeIndex].heading2}
                                </h1>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT LIST */}
                    <div className="col-lg-4 d-flex align-items-center">
                        <div className="work-list w-100">

                            <p className="small-title">[ We are a full-stack
                                digital marketing agency ]</p>

                            {workData.map((item, index) => (
                                <div
                                    key={index}
                                    className={`work-item ${activeIndex === index ? "active" : ""
                                        }`}
                                    onClick={() => setActiveIndex(index)}
                                >
                                    <div>
                                        <h5>{item.title}</h5>
                                        <span>{item.year}</span>
                                    </div>

                                    {activeIndex === index && <div className="dot"></div>}
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}