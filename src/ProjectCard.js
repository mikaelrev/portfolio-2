import React from "react";
import "./ProjectCard.css";
import Heading from "./Heading";

function ProjectCard({ Title, ImageUrl, SiteUrl, RepoUrl }) {
  return (
    <div className="card">
      <img className="card__img" src={ImageUrl} alt="Screenshot of project" />
      <div className="card__body">
        <Heading size="2" content={Title} />
        <a
          className="card__link"
          href={SiteUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          Go to site
        </a>
        <a
          className="card__link"
          href={RepoUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          View GitHub repo
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
