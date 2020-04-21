import React from 'react';
import { Link } from 'react-router-dom';

import Container from '../Container/Container';

import './Header.styles.css';

const Header = () => {
  return (
    <Container>
      <header>
        <div className='header-logo'>
          <Link to='/'>
            <img
              src='https://i.ibb.co/fq9Y9vf/icon.png'
              alt='icon'
              height='40'
            />
            <span>&nbsp; Візитна картка</span>
          </Link>
        </div>
        <div className='header-links'>
          <Link to='/contacts'>Контакти</Link>
          <Link to='/details'>Деталі</Link>
        </div>
      </header>
    </Container>
  );
};

export default Header;
