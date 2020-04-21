import React from 'react';

import './Card.styles.css';

const Card = ({ title, text }) => (
  <div className='card'>
    <h3 className='cart-title'>{title}</h3>
    <p className='cart-text'>{text}</p>
  </div>
);

export default Card;
