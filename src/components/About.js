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
        <h4>Junior Developer</h4>
        <p>
          Prior to changing career direction, I had spent the last ten years
          delivering business advisory services to clients across the UK. I hold
          Chartered Accountant and Chartered Tax Adviser qualifications, and
          have a broad experience in delivering complex client projects.
        </p>
        <p>
          Since starting coding in May 2022, I have completed the{" "}
          <a href="https://www.shecodes.io/" target="_blank" rel="noreferrer">
            SheCodes Pro
          </a>{" "}
          bootcamp and joined a large FinTech company as an Academy Developer.
          My current work experience and personal projects are focused on
          frontend development, but I am keen to progress to full stack and
          mobile development.
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
