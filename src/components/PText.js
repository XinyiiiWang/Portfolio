import React from 'react';
import PTextStyle from '../styles/PTextStyle';

export default function PText({ children }) {
  return (
    <PTextStyle className="para">
      <p>{children}</p>
    </PTextStyle>
  );
}
