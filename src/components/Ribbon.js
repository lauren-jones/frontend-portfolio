import React from "react";
import "./ribbon.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

export default function Ribbon() {
  return (
    <div className="Ribbon">
      <p>creating with:</p>
      <ul>
        <li>Rest API</li>
        <FontAwesomeIcon
          icon={faCircle}
          className="Ribbon-dot"
        ></FontAwesomeIcon>
        <li>React</li>
        <FontAwesomeIcon
          icon={faCircle}
          className="Ribbon-dot"
        ></FontAwesomeIcon>
        <li>SQL</li>
        <FontAwesomeIcon
          icon={faCircle}
          className="Ribbon-dot"
        ></FontAwesomeIcon>
        <li>MuleSoft</li>
        <FontAwesomeIcon
          icon={faCircle}
          className="Ribbon-dot"
        ></FontAwesomeIcon>
        <li>Git</li>
        <FontAwesomeIcon
          icon={faCircle}
          className="Ribbon-dot"
        ></FontAwesomeIcon>
        <li>Tailwind CSS</li>
      </ul>
    </div>
  );
}
