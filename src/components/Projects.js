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
      name: "React Weather App",
      description:
        "A simple weather app for thousands of cities around the world, with an integrated 5-day forecast. Built with React, Axios and the OpenWeather REST API.",
      number: 3,
      source_code: "https://github.com/lauren-jones/react-weather-app",
      live_preview: "https://voluble-cobbler-ef636c.netlify.app/",
    },
  ];
  return (
    <div className="Projects" id="Projects">
      <h3 className="Projects-subtitle">featured</h3>
      <h2 className="Projects-section-title">Projects</h2>
      <div className="Projects-container">
        <div className="Projects-one">
          <Project project={projects[0]} className="project-one" />
        </div>
        <div className="Projects-two">
          <Project project={projects[1]} className="project-two" />
        </div>
        <div className="Projects-three">
          <Project project={projects[2]} className="project-three" />
        </div>
      </div>
    </div>
  );
}
