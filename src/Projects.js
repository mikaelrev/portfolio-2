import React from "react";
import Heading from "./Heading";
import ProjectCard from "./ProjectCard";
import "./Projects.css";

function Projects() {
  return (
    <div className="projects">
      <Heading content="My Projects" />
      <div className="projects__grid">
        <ProjectCard
          Description="An ecommerce website where you can make an account and buy climbing gear"
          ImageUrl="images/semester-project2.png"
          Title="Semester Project 2"
          SiteUrl="https://admirable-swan-22efb8.netlify.app"
          RepoUrl="https://github.com/mikaelrev/semester-project2"
        />
        <ProjectCard
          Description="Change this"
          ImageUrl=""
          Title="JS Frameworks CA"
          SiteUrl=""
          RepoUrl="https://github.com/Noroff-FEU-Assignments/js-frameworks-course-assignment-mikaelrev"
        />
        <ProjectCard
          Description="A social media website where people with similar music tastes can get together and share what they're listening to"
          ImageUrl="images/project-exam2.png"
          Title="Project Exam 2"
          SiteUrl="https://magnificent-sundae-78f153.netlify.app/"
          RepoUrl="https://github.com/Noroff-FEU-Assignments/project-exam-2-mikaelrev"
        />
      </div>
    </div>
  );
}

export default Projects;
