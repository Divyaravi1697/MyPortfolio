import React from 'react';
import "./ProjectCardStyle.css";
import { FaArrowRight } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import Tilt from 'react-parallax-tilt';

export default function ProjectCard(props) {
  const handleOnClick = () => {
    window.open(`${props.projectLink}`);
  }

  return (
    <div className='project-window' id={props.id}>
      <div className={`project-wrapper ${props.className}`}>
        <div className="about-project">
          <div className="project-title">{props.projectTitle}</div>
          <div className="desc">{props.projectDesc}</div>
        </div>
        <Tilt className="project-img" gyroscope={true} >
          <a href={props.deployedProjectLink} target="_blank" rel="noopener noreferrer"><img src={props.projectImg} alt="Displaying Project" /></a>
        </Tilt>

      </div>
    </div>
  )
}