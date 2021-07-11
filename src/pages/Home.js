import React from 'react';
import IntroSection from '../components/IntroSection';
import AboutSection from '../components/AboutSection';
import ProjectSection from '../components/ProjectSection';

export default function Home() {
  return (
    <div>
      <IntroSection />
      <AboutSection />
      <ProjectSection />
    </div>
  );
}
