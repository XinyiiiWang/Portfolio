import React from 'react';
import IntroSection from '../components/IntroSection';
import AboutSection from '../components/AboutSection';
import ProjectSection from '../components/ProjectSection';
import ContactBanner from '../components/ContactBanner';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div>
      <IntroSection />
      <AboutSection />
      <ProjectSection />
      <ContactBanner />
      <Footer />
    </div>
  );
}
