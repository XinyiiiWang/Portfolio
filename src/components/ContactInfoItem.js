import React from 'react';
import { MdPlace } from 'react-icons/md';
import PText from './PText';
import ContactInfoItemStyle from '../styles/ContactInfoItemStyle';

export default function ContactInfoItem({
  icon = <MdPlace />,
  text = 'an info',
}) {
  return (
    <ContactInfoItemStyle>
      <div className="icon">{icon}</div>
      <div className="info">
        <PText>{text}</PText>
      </div>
    </ContactInfoItemStyle>
  );
}
