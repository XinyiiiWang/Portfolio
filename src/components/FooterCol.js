import React from 'react';
import { Link } from 'react-router-dom';
import FooterColStyle from '../styles/FooterColStyle';

export default function FooterCol({
  heading = 'col heading',
  links = [
    {
      type: 'link',
      title: 'Home',
      path: '/Portfolio',
    },
    {
      type: 'link',
      title: 'About',
      path: '/Portfolio/about',
    },
  ],
}) {
  return (
    <FooterColStyle>
      <h1 className="heading">{heading}</h1>
      <ul>
        {links.map((item, index) => (
          <li key={index}>
            {item.type === 'link' ? (
              <Link to={item.path}>{item.title}</Link>
            ) : (
              <a href={item.path} target="_blank" rel="noreferrer">
                {item.title}
              </a>
            )}
          </li>
        ))}
      </ul>
    </FooterColStyle>
  );
}
