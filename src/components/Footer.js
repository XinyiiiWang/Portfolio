import React from 'react';
import PText from './PText';
import FooterCol from './FooterCol';
import FooterStyle from '../styles/FooterStyle';

export default function Footer() {
  return (
    <FooterStyle>
      <div className="container">
        <div className="footer_col1">
          <h1 className="footer_col1_title">Xinyi Wang</h1>
          <PText>
            A Master student at KTH Royal Institute of Technology in Stockholm,
            Sweden. Open for any possibility.
          </PText>
        </div>
        <div className="footer_col2">
          <FooterCol
            heading="Links"
            links={[
              {
                title: 'Home',
                path: '/Portfolio',
                type: 'link',
              },
              {
                title: 'About',
                path: '/Portfolio/about',
                type: 'link',
              },
              {
                title: 'Projects',
                path: '/Portfolio/projects',
                type: 'link',
              },
              {
                title: 'Contact',
                path: '/Portfolio/contact',
                type: 'link',
              },
            ]}
          />
        </div>
        <div className="footer_col3">
          <FooterCol
            heading="Contact Info"
            links={[
              {
                title: '+460724420618',
                path: 'tel:+460724420618',
              },
              {
                title: 'is.xinyiwang@outlook.com',
                path: 'mailto:is.xinyiwang@outlook.com',
              },
              {
                title: 'KTH, Stockholm, Sweden',
                path: 'https://www.google.com/maps/place/KTH+Royal+Institute+of+Technology/@59.3498706,18.0680679,17z/data=!3m1!4b1!4m5!3m4!1s0x465f779d96ed48cb:0xb1366ae00b879b4a!8m2!3d59.3498706!4d18.0702566',
              },
            ]}
          />
        </div>
        <div className="footer_col4">
          <FooterCol
            heading="Social Media"
            links={[
              {
                title: 'Linkedin',
                path: 'https://www.linkedin.com/in/xinyi-wang-b48290200/',
              },
              {
                title: 'Facebook',
                path: 'https://www.facebook.com/people/Xinyi-Wang/100050512331010/',
              },
              {
                title: 'Instagram',
                path: 'https://www.instagram.com/nolook1ngback_/',
              },
            ]}
          />
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <PText>@ 2021 - Xinyi Wang</PText>
        </div>
      </div>
    </FooterStyle>
  );
}
