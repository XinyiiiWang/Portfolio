import React, { useState, useEffect } from 'react';
import { MdSearch } from 'react-icons/md';
import SectionTitle from '../components/SectionTitle';
import ProjectsStyle from '../styles/ProjectsStyle';
import ProjectItem from '../components/ProjectItem';
import ProjectsInfo from '../assets/data/projects';

export default function Projects() {
  const [searchText, setSearchText] = useState('');
  const [projectsData, setProjectsData] = useState(ProjectsInfo);

  useEffect(() => {
    if (searchText === '') return;
    setProjectsData(() =>
      ProjectsInfo.filter((item) =>
        item.name.toLowerCase().match(searchText.toLowerCase())
      )
    );
  }, [searchText]);

  const handleChange = (e) => {
    e.preventDefault();
    setSearchText(e.target.value);
    if (!e.target.value.length > 0) {
      setProjectsData(ProjectsInfo);
    }
  };

  return (
    <ProjectsStyle>
      <div className="container">
        <SectionTitle heading="Projects" subheading="Some of my recent works" />
        <div className="projects_searchBar">
          <form>
            <input
              type="text"
              value={searchText}
              onChange={handleChange}
              placeholder="project name"
            />
            <MdSearch className="searchIcon" />
          </form>
        </div>
        <div className="projects_allItems">
          {projectsData.map((item) => (
            <ProjectItem
              key={item.id}
              title={item.name}
              desc={item.description}
              img={item.img}
            />
          ))}
        </div>
      </div>
    </ProjectsStyle>
  );
}
