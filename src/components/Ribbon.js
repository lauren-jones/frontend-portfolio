import React from "react";
import "./ribbon.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

export default function Ribbon() {
  return (
    <div className="Ribbon">
      <ul>
        <FontAwesomeIcon
          icon={faCircle}
          className="Ribbon-dot"
        ></FontAwesomeIcon>
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
        <li>Node.js</li>
        <FontAwesomeIcon
          icon={faCircle}
          className="Ribbon-dot"
        ></FontAwesomeIcon>
        <li>Graph QL</li>
        <FontAwesomeIcon
          icon={faCircle}
          className="Ribbon-dot"
        ></FontAwesomeIcon>
        <li>CSS Grid</li>
        <FontAwesomeIcon
          icon={faCircle}
          className="Ribbon-dot"
        ></FontAwesomeIcon>
        <li>Flex Box</li>
        <FontAwesomeIcon
          icon={faCircle}
          className="Ribbon-dot"
        ></FontAwesomeIcon>
      </ul>
    </div>
  );
}
