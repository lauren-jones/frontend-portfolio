import React from "react";
import "./about.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubAlt, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

export default function About() {
  return (
    <section className="About" id="About">
      <div className="About-image">
        <div className="About-image-container">
          <img src="/images/laurenprofile.png" alt="lauren jones" />
        </div>
      </div>
      <div className="About-text">
        <h2>Lauren Jones</h2>
        <h4>Software Developer</h4>
        <p>
          Software developer with Principality Building Society, delivering
          fullstack stories in an agile product team.
        </p>
        <ul>
          <li>
            <a
              href="https://www.linkedin.com/in/lauren-jones-3aa52751/"
              className="About-text-icon"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedinIn}></FontAwesomeIcon>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/lauren-jones"
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
