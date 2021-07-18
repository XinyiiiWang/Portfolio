import React from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import SectionTitle from './SectionTitle';
import 'swiper/swiper-bundle.min.css';
import projects from '../assets/data/projects';
import ProjectItem from './ProjectItem';
import ProjectSectionStyle from '../styles/ProjectSectionStyle';

SwiperCore.use([Navigation]);

export default function ProjectsSection() {
  // console.log(projects);
  return (
    <ProjectSectionStyle>
      <div className="container">
        <SectionTitle heading="Projects" subheading="Some of my recent works" />
        <div className="projects_allItems">
          <Swiper
            spaceBetween={30}
            slidesPerView={2}
            navigation
            breakpoints={{
              // when window width is >= 640px
              640: {
                slidesPerView: 1,
              },
              // when window width is >= 768px
              768: {
                slidesPerView: 2,
              },
              // when window width is >= 1200px
              // 1200: {
              //   slidesPerView: 3,
              // },
            }}
          >
            {projects.map((project, index) => {
              if (index >= 10) return;
              return (
                <SwiperSlide key={project.id}>
                  <ProjectItem
                    title={project.name}
                    img={project.img}
                    desc={project.desc}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </ProjectSectionStyle>
  );
}
