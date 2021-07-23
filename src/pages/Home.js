import React from 'react';
import IntroSection from '../components/IntroSection';
import AboutSection from '../components/AboutSection';
import ProjectSection from '../components/ProjectSection';
import ContactBanner from '../components/ContactBanner';

export default function Home() {
  return (
    <div>
      <IntroSection />
      <AboutSection />
      <ProjectSection />
      <ContactBanner />
    </div>
  );
}
