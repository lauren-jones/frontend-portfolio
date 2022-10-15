import React from "react";
import "./header.css";

export default function Header() {
  return (
    <header className="Header">
      <ul>
        <li>
          <a href="#Home">Home</a>
        </li>
        <li>
          <a href="#About">About</a>
        </li>
        <li>
          <a href="#Projects">Work</a>
        </li>
        <li>
          <a href="#Contact">Contact</a>
        </li>
      </ul>
    </header>
  );
}
