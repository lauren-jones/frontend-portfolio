import React from "react";
import "./projects.css";
import Project from "./Project";

export default function Projects() {
  let projects = [
    {
      name: "Ecommerce Web App",
      description:
        "Frontend project built with the UI components from project #2 (using published npm package), along with Typescript, React and React Router Dom.",
      number: 1,
      source_code: "https://github.com/lauren-jones/salt-and-soak-shop",
      live_preview: "https://sunny-croquembouche-e680ef.netlify.app/",
    },
    {
      name: "Storybook UI Components",
      description:
        "UI components for a skincare/beauty-themed ecommerce store. Built with React, Typescript, Rollup and Storybook, and published as an npm package.",
      number: 2,
      source_code: "https://github.com/lauren-jones/react-ecommerce-ui-kit",
      live_preview:
        "https://capable-stroopwafel-e97bb1.netlify.app/?path=/story/accordion--default",
    },
    {
      name: "Pomodoro Timer",
      description:
        "A simple Pomodoro Timer (albeit with time intervals set to 60 seconds work, 5 seconds break for ease of review). Built with Next.JS and Tailwind CSS.",
      number: 3,
      source_code: "https://github.com/lauren-jones/pomodoro-timer",
      live_preview: "https://stately-crostata-a2bbe2.netlify.app/",
    },
  ];
  return (
    <div className="Projects" id="Projects">
      <h3 className="Projects-subtitle">featured</h3>
      <h2 className="Projects-section-title">Projects</h2>
      <div className="Projects-container">
        <div className="Projects-one">
          <Project project={projects[0]} />
        </div>
        <div className="Projects-two">
          <Project project={projects[1]} />
        </div>
        <div className="Projects-three">
          <Project project={projects[2]} />
        </div>
      </div>
    </div>
  );
}
