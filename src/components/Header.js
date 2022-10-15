import React from "react";
import "./header.css";

export default function Header() {
  return (
    <header className="Header">
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">About</a>
        </li>
        <li>
          <a href="/">Work</a>
        </li>
        <li>
          <a href="/">Tech</a>
        </li>
        <li>
          <a href="/">Contact</a>
        </li>
      </ul>
    </header>
  );
}
