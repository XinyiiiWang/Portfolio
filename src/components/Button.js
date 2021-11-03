import React from 'react';
import { Link } from 'react-router-dom';
import ButtonStyle from '../styles/ButtonStyle';

export default function Button({
  btnLink = '',
  btnText = 'Default',
  outline = false,
}) {
  return (
    <ButtonStyle outline={outline} className="button-wrapper">
      {/(http|https):\/\/([\w.]+\/?)\S*/.test(btnLink) ? (
        <a className="button" href={btnLink} target="_blank" rel="noreferrer">
          {btnText}
        </a>
      ) : (
        <Link className="button" to={btnLink}>
          {btnText}
        </Link>
      )}
    </ButtonStyle>
  );
}
