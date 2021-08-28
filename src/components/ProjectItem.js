import React from 'react';
import ProjectImg from '../assets/images/projectImg.png';
import ProjectItemStyle from '../styles/ProjectItemStyle';

export default function ProjectItem({
  img = ProjectImg,
  title = 'Project Name',
  desc = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  link = '/projects',
}) {
  return (
    <ProjectItemStyle>
      <div className="projectItem_img">
        <a href={link} target="_blank" rel="noreferrer">
          <img src={img} alt="project img" />
        </a>
      </div>
      <div className="projectItem_info">
        <a herf={link} target="_blank" rel="noreferrer">
          <h3 className="projectItem__title">{title}</h3>
        </a>
        <p className="projectItem__desc">{desc}</p>
      </div>
    </ProjectItemStyle>
  );
}
