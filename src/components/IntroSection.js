import React from 'react';
import IntroImg from '../assets/images/me.JPG';
import PText from './PText';
import Button from './Button';
import SocialMediaArrow from '../assets/images/social-media-arrow.svg';
import ScrollDownArrow from '../assets/images/scroll-down-arrow.svg';
import IntroSectionStyle from '../styles/IntroSectionStyle';

export default function IntroSection() {
  return (
    <IntroSectionStyle>
      <div className="intro">
        <div className="container">
          <h1 className="intro_heading">
            <span>Hello, This is</span>
            <span className="intro_name">Xinyi Wang</span>
          </h1>
          <div className="intro_img">
            <img src={IntroImg} alt="" />
          </div>
          <div className="intro_info">
            <PText>
              I am a front-end developer, music lover, and fika addict based in
              Stockholm, Sweden.
            </PText>
            <Button btnLink="/projects" btnText="see my works" />
          </div>
          <div className="intro_social">
            <div className="intro_social_indicator">
              <p>Follow</p>
              <img src={SocialMediaArrow} alt="social media arrow" />
            </div>
            <div className="intro_social_text">
              <ul>
                <li>
                  <a
                    href="https://www.linkedin.com/in/xinyi-wang-b48290200/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    LI
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/people/Xinyi-Wang/100050512331010/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    FB
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/nolook1ngback_/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    IG
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="intro_scrollDown">
            <p>Scroll</p>
            <img src={ScrollDownArrow} alt="scroll down arrow" />
          </div>
        </div>
      </div>
    </IntroSectionStyle>
  );
}
