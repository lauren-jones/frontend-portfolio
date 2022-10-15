import React from "react";
import "./ribbon.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

export default function Ribbon() {
  return (
    <div className="Ribbon">
      <p>skilled with:</p>
      <ul>
        <li>React</li>
        <FontAwesomeIcon
          icon={faCircle}
          className="Ribbon-dot"
        ></FontAwesomeIcon>
        <li>Typescript</li>
        <FontAwesomeIcon
          icon={faCircle}
          className="Ribbon-dot"
        ></FontAwesomeIcon>
        <li>Next JS</li>
        <FontAwesomeIcon
          icon={faCircle}
          className="Ribbon-dot"
        ></FontAwesomeIcon>
        <li>Graph QL</li>
        <FontAwesomeIcon
          icon={faCircle}
          className="Ribbon-dot"
        ></FontAwesomeIcon>
        <li>Git</li>
        <FontAwesomeIcon
          icon={faCircle}
          className="Ribbon-dot"
        ></FontAwesomeIcon>
        <li>REST API</li>
      </ul>
    </div>
  );
}
