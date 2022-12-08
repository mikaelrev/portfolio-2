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
          ImageUrl="https://cdn.forestresearch.gov.uk/2021/11/forestry-home-1.jpg"
          Title="whatever"
          SiteUrl="https://magnificent-sundae-78f153.netlify.app/"
          RepoUrl="https://github.com/Noroff-FEU-Assignments/project-exam-2-mikaelrev"
        />
        <ProjectCard
          ImageUrl="https://cdn.forestresearch.gov.uk/2021/11/forestry-home-1.jpg"
          Title="whatever"
          SiteUrl="https://magnificent-sundae-78f153.netlify.app/"
          RepoUrl="https://github.com/Noroff-FEU-Assignments/project-exam-2-mikaelrev"
        />
        <ProjectCard
          ImageUrl="https://cdn.forestresearch.gov.uk/2021/11/forestry-home-1.jpg"
          Title="whatever"
          SiteUrl="https://magnificent-sundae-78f153.netlify.app/"
          RepoUrl="https://github.com/Noroff-FEU-Assignments/project-exam-2-mikaelrev"
        />
      </div>
    </div>
  );
}

export default Projects;
