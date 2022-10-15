import React from "react";
import "./projects.css";
import Project from "./Project";

export default function Projects() {
  let projects = [
    {
      name: "UI Kit with StoryBook",
      description:
        "Beautiful website templates, a comprehensive launch kit, The Brand Style Workbook, social templates, you name it! 10% OFF: LOVE[YOURNAMEHERE]",
      number: 1,
      source_code: "/",
      live_preview: "/",
    },
    {
      name: "Ecommerce Store App",
      description:
        "Beautiful website templates, a comprehensive launch kit, The Brand Style Workbook, social templates, you name it! 10% OFF: LOVE[YOURNAMEHERE]",
      number: 2,
      source_code: "/",
      live_preview: "/",
    },
    {
      name: "React Weather App",
      description:
        "Beautiful website templates, a comprehensive launch kit, The Brand Style Workbook, social templates, you name it! 10% OFF: LOVE[YOURNAMEHERE]",
      number: 3,
      source_code: "/",
      live_preview: "/",
    },
    {
      name: "Digital Postard App",
      description:
        "Beautiful website templates, a comprehensive launch kit, The Brand Style Workbook, social templates, you name it! 10% OFF: LOVE[YOURNAMEHERE]",
      number: 4,
      source_code: "/",
      live_preview: "/",
    },
    {
      name: "Another project stuff",
      description:
        "Beautiful website templates, a comprehensive launch kit, The Brand Style Workbook, social templates, you name it! 10% OFF: LOVE[YOURNAMEHERE]",
      number: 5,
      source_code: "/",
      live_preview: "/",
    },
    {
      name: "Another project stuff",
      description:
        "Beautiful website templates, a comprehensive launch kit, The Brand Style Workbook, social templates, you name it! 10% OFF: LOVE[YOURNAMEHERE]",
      number: 6,
      source_code: "/",
      live_preview: "/",
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
        <div className="Projects-four">
          <Project project={projects[3]} className="project-four" />
        </div>
        <div className="Projects-five">
          <Project project={projects[4]} className="project-five" />
        </div>
        <div className="Projects-six">
          <Project project={projects[5]} className="project-six" />
        </div>
      </div>
    </div>
  );
}
