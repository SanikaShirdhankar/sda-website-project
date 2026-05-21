import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "../../../styles/project-filter.css";
import img1 from "../../../assets/project/gal-1.jpg";
import img2 from "../../../assets/project/gal-2.jpg";
import img3 from "../../../assets/project/gal-3.jpg";
import img4 from "../../../assets/project/gal-4.jpg";

const projects = [
  {
    id: 1,
    title: "PORTFOLIO DETAILS MARK",
    category: "Digital Marketing",
    image: img1,
    tag: "NEW",
  },
  {
    id: 2,
    title: "DROPMARKET",
    category: "Creative Services",
    image: img2,
  },
  {
    id: 3,
    title: "TRUST IN TIME",
    category: "Creative Services",
    image: img3,
  },
  {
    id: 4,
    title: "Web Branding PROJECT",
    category: "Web Branding",
    image: img4,
  },
];

const tabs = ["all", "Creative Services", "Digital Marketing", "Web Branding"];

export default function RecentWork() {
  const [activeTab, setActiveTab] = useState("all");

  const filteredProjects =
    activeTab === "all"
      ? projects
      : projects.filter((p) => p.category === activeTab);

  return (
    <div className="recent-work">
      <div className="container">

      
      {/* HEADER */}
      <div className="d-flex justify-content-between align-items-center mb-5">
        <h2 className="title">Recent Work</h2>

        <div className="tabs">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`tab-btn ${activeTab === tab ? "active" : ""}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* SLIDER */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        breakpoints={{
          0: { slidesPerView: 1.2 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {filteredProjects.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="project-card">
              
              <div className="image-wrappers">
                <img src={item.image} alt="" />

                {item.tag && <span className="tag">{item.tag}</span>}
              </div>

              <h3>{item.title}</h3>
              <p>{item.category}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

    </div>
    </div>
  );
}