import React from 'react';
import PText from './PText';
import Button from './Button';
import ContactBannerStyle from '../styles/ContactBannerStyle';

export default function ContactBanner() {
  return (
    <ContactBannerStyle>
      <div className="container">
        <div className="contactBanner_wrapper">
          <PText>If you have any idea</PText>
          <h3 className="contactBanner_heading">
            Don't hesitate to contact me
          </h3>
          <Button btnLink="/Portfolio/contact" btnText="Contact me" />
        </div>
      </div>
    </ContactBannerStyle>
  );
}
