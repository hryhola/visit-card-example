import React from 'react';
import { Link } from 'react-router-dom';

import './ButtonLink.styles.css';

const ButtonLink = ({ childred, to, text, ...props }) => (
  <Link to={to}>
    <button className='button-link' {...props}>
      {text}
      {childred}
    </button>
  </Link>
);

export default ButtonLink;
