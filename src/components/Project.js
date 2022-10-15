import React from "react";
import "./project.css";

export default function Project(props) {
  return (
    <div className="Project">
      <h3 className="Project-name">{props.project.name}</h3>
      <p className="Project-description">{props.project.description}</p>
      <ul className="Project-links">
        <li>
          <a href={props.project.source_code}>source code</a>
        </li>
        <li>
          <a href={props.project.live_preview}>live preview</a>
        </li>
      </ul>
      <div className="Project-number">{props.project.number}</div>
    </div>
  );
}
