import React from 'react';
import { Link } from 'react-router-dom';
import ButtonStyle from '../styles/ButtonStyle';

export default function Button({
  btnLink = 'test',
  btnText = 'Test',
  outline = false,
}) {
  return (
    <ButtonStyle outline={outline} className="button-wrapper">
      <Link className="button" to={btnLink}>
        {btnText}
      </Link>
    </ButtonStyle>
  );
}
