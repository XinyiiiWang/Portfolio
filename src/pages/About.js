import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import PText from '../components/PText';
import Button from '../components/Button';
import AboutImg from '../assets/images/about-page-img.JPG';
import AboutPageStyle from '../styles/AboutPageStyle';
import AboutInfoItem from '../components/AboutInfoItem';
import ContactBanner from '../components/ContactBanner';
import Footer from '../components/Footer';

export default function About() {
  return (
    <AboutPageStyle>
      <div className="container">
        <div className="top-section">
          <div className="left">
            <p className="about_subheading">
              Hi, I am <span>Xinyi Wang</span>
            </p>
            <h2 className="about_heading">A Master student at KTH</h2>
            <div className="about_info">
              <PText>
                Hi! I am made in China. More specifically, I am from Ningbo,
                Zhejiang, a place which sits at the mid-point of the Chinese
                coastline.
                <br />
                <br />
                I did my Bachelor Degree of Digital Media Technology at Zhejiang
                University in Hangzhou, Zhejiang. From there, I started to enjoy
                the beauty of programming. For me, programming is a useful art,
                which gives me tremendous happiness and satisfaction whenever I
                create something cool.
                <br />
                <br />
                Now I am doing my Master of Interactive Media Technology at KTH
                Royal Institute of Technology in Stockholm, Sweden. I met lots
                of talented people and we worked together to create fun stuffs.
                My vision is to make a difference in peoples’ lives by creating
                amazing applications. Let's do it!
              </PText>
            </div>

            <Button
              btnText="My Linkedin"
              btnLink=" https://www.linkedin.com/in/xinyi-wang-b48290200/"
            />
          </div>
          <div className="right">
            <img src={AboutImg} alt="" />
          </div>
        </div>
        <div className="about_info_items">
          <div className="about_info_item">
            <h1 className="about_info_heading">Education</h1>
            <AboutInfoItem title="Bachelor" items={['Zhejiang University']} />
            <AboutInfoItem
              title="Master"
              items={['KTH Royal Institute of Technology']}
            />
          </div>
          <div className="about_info_item">
            <h1 className="about_info_heading">My Skill</h1>
            <AboutInfoItem
              title="Front-end"
              items={['HTML', 'CSS', 'JS', 'React', 'Redux', 'TypeScript']}
            />
            <AboutInfoItem title="Back-end" items={['Node', 'Express']} />
            <AboutInfoItem title="Design" items={['Figma', 'Maya']} />
            <AboutInfoItem
              title="Others"
              items={['Final cut pro', 'iMovie', 'Fl Studio']}
            />
          </div>
          <div className="about_info_item">
            <h1 className="about_info_heading">Experience</h1>
            <AboutInfoItem
              title="2022.06 - Present"
              items={['Summer Intern at Ericsson']}
            />
            <AboutInfoItem
              title="2022.01 - 2022.06"
              items={['Master Thesis Student at Ericsson']}
            />
            <AboutInfoItem
              title="2021.06 - 2021.12"
              items={['Innovation Intern at Ericsson']}
            />
            <AboutInfoItem
              title="2020.10 - 2022.06"
              items={['Student Ambassador at Svenska Institutet']}
            />
            <AboutInfoItem
              title="2020.05 - 2020.08"
              items={['Data Scientist Intern at NetEase Game']}
            />
            <AboutInfoItem
              title="2019.07 - 2019.09"
              items={['Game Designer Intern at Giant Game']}
            />
          </div>
        </div>
      </div>
      <ContactBanner />
      <Footer />
    </AboutPageStyle>
  );
}
