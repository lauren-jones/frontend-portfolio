import React from "react";
import "./banner.css";

export default function Banner() {
  return (
    <section className="Banner" id="Home">
      <img src="/images/banner.jpg" alt="" />
      <div className="Banner-details">
        <h4>developer</h4>
        <h2>Portfolio</h2>
        <p>A few personal projects I've worked on in the last year.</p>
      </div>
    </section>
  );
}
