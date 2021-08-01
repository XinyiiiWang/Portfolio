import React from 'react';
import PText from './PText';
import AboutInfoItemStyle from '../styles/AboutInfoItemStyle';

export default function AboutInfoItem({
  title = 'title',
  items = ['HTML', 'CSS', 'JS'],
}) {
  return (
    <AboutInfoItemStyle>
      <h1 className="title">{title}</h1>
      <div className="items">
        {items.map((item, index) => (
          <div className="item" key={index}>
            <PText>{item}</PText>
          </div>
        ))}
      </div>
    </AboutInfoItemStyle>
  );
}
