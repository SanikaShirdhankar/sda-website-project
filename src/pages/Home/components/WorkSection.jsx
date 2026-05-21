import React from "react";
import "../../../styles/worksection.css";

const projects = [
    {
        title: "Arrox Digital Agency HTML Template",
        category: "WordPress, Themeforest",
        year: "2025",
        img: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519",
    },
    {
        title: "Al Khobar Uptown",
        category: "Visual Identity, Branding",
        year: "2021",
        img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7",
    },
    {
        title: "Al Khobar Uptown",
        category: "Visual Identity, Branding",
        year: "2021",
        img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7",
    },
];

export default function WorkSection() {
    return (
        <section className="project-section">
            <div className="container">

                {/* Top Bar */}

                <div className="work-header">
                    <p>(Projects)</p>
                    <a href="/" className="browse-link">
                        Browse all work
                    </a>
                </div>

                {/* Big Heading */}
                <h1 className="big-title">RECENT WORK</h1>

                {/* Grid */}

                <div className="work-grid">

                    {/* ROW 1 → 2 items */}
                    <div className="row">
                        {projects.slice(0, 2).map((item, index) => (
                            <div className="col-md-6" key={index}>
                                <div className="work-card">

                                    <div className="image-wrapper">
                                        <img src={item.img} alt="" />
                                        <div className="hover-circle">View Project</div>
                                    </div>

                                    <div className="work-info">
                                        <h3>{item.title}</h3>
                                        <p>{item.category}</p>
                                        <span>({item.year})</span>
                                    </div>

                                </div>
                            </div>
                        ))}
                    </div>

                    {/* ROW 2 → 1 full width */}
                    <div className="row">
                        {projects.slice(0, 1).map((item, index) => (
                            <div className="col-md-12" key={index}>
                                <div className="work-card">

                                    <div className="image-wrapper">
                                        <img src={item.img} alt="" />
                                        <div className="hover-circle">View Project</div>
                                    </div>

                                    <div className="work-info">
                                        <h3>{item.title}</h3>
                                        <p>{item.category}</p>
                                        <span>({item.year})</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* NEXT ROWS (repeat pattern) */}
                    <div className="row">
                        {projects.slice(3, 5).map((item, index) => (
                            <div className="col-md-6" key={index}>
                                <div className="work-card">

                                    <div className="image-wrapper">
                                        <img src={item.img} alt="" />
                                        <div className="hover-circle">View Project</div>
                                    </div>

                                    <div className="work-info">
                                        <h3>{item.title}</h3>
                                        <p>{item.category}</p>
                                        <span>({item.year})</span>
                                    </div>

                                </div>
                            </div>
                        ))}
                    </div>

                </div>

            </div>
        </section>
    );
}