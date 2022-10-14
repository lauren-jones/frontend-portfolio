import React from "react";
import "./header.css";

export default function Header() {
  return (
    <header className="Header">
      <p>get right to it:</p>
      <ul>
        <li>
          <a href="/">01 / About</a>
        </li>
        <li>
          <a href="/">02 / Work</a>
        </li>
        <li>
          <a href="/">03 / Tech</a>
        </li>
        <li>
          <a href="/">04 / Contact</a>
        </li>
      </ul>
    </header>
  );
}
