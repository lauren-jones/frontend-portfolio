import React from "react";
import "./banner.css";

export default function Banner() {
  return (
    <section className="Banner" id="Home">
      <img src="/images/banner.jpg" alt="" />
      <div className="Banner-details">
        <h4>developer</h4>
        <h2>Portfolio</h2>
        <p>
          Hi, I’m Lauren! This portfolio features a few of the projects I’ve
          built since starting my coding journey in May 2022. Although I've
          always loved problem solving and have a passion for tech, I only
          recently changed direction from a fast-paced career in finance. It’s
          the start of the journey, and one that I’m enjoying immensely!
        </p>
      </div>
    </section>
  );
}
