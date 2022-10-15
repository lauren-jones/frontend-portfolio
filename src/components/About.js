import React from "react";
import "./about.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubAlt, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

export default function About() {
  return (
    <section className="About" id="About">
      <div className="About-image">
        <div className="About-image-container">
          <img src="/images/profile.png" alt="lauren jones" />
        </div>
      </div>
      <div className="About-text">
        <h2>Lauren Jones</h2>
        <h4>Frontend Developer</h4>
        <p>
          We are modern copywriting curators who will help you and your business
          create authentic words and copy. We help you create your own story,
          one that is aligns with your brand. We can help you create your own
          story, one that is aligns with your brand. Our mission is to write
          from the heart. We are brand and social media curators who will help
          you and business and projects. who will help you and business and.
        </p>
        <p>
          We can help you create your own story, one that is aligns with your
          brand. Our mission is to write from the heart and help you build a
          business you love.
        </p>
        <ul>
          <li>
            <a
              href="/"
              className="About-text-icon"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedinIn}></FontAwesomeIcon>
            </a>
          </li>
          <li>
            <a
              href="/"
              className="About-text-icon"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faGithubAlt}></FontAwesomeIcon>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
