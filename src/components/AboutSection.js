import React from 'react';
import SectionTitle from './SectionTitle';
import PText from './PText';
import Button from './Button';
import AboutImg from '../assets/images/about-section-img.JPG';
import AboutSectionStyle from '../styles/AboutSectionStyle';

export default function AboutSection() {
  return (
    <AboutSectionStyle>
      <div className="container">
        <div className="aboutSection_left">
          <SectionTitle
            className="section-title"
            subheading="Let me introduce myself"
            heading="About me"
          />
          <PText>
            Hej hej! My name is Xinyi Wang. I am made in China, currently doing
            Master of Interactive Media Technology at KTH Royal Institute of
            Technology in Stockholm, Sweden. I am a front-end developer, music
            lover, and fika addict.I’m also a former college basketball athlete.
            Wanna play a match?
          </PText>
          <div className="aboutSection_buttons">
            <Button btnLink="/projects" btnText="Works" />
            <Button btnLink="/about" btnText="Read More" outline />
          </div>
        </div>
        <div className="aboutSection_right">
          <img src={AboutImg} alt="" className="aboutSection_img" />
        </div>
      </div>
    </AboutSectionStyle>
  );
}
