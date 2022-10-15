import React from "react";
import "./contact.css";

export default function Contact() {
  return (
    <div className="Contact">
      <h2 className="Contact-title">So, what's next?</h2>
      <h4 className="Contact-subtitle">
        Well, my inbox is always open! If you have a new opportunity, question
        or just want to say hi, please get in touch.
      </h4>
      <button>
        <a href="mailto:laurenjones1607@gmail.com">Reach out</a>
      </button>
    </div>
  );
}
