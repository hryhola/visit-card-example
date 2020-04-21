import React from 'react';

import CentredHalf from '../../components/CentredHalf/CentredHalf';
import Container from '../../components/Container/Container';
import ButtonLink from '../../components/ButtonLink/ButtonLink';

import './MainSection.styles.css';

const MainSection = () => {
  return (
    <Container>
      <section id='main-section'>
        <CentredHalf>
          <img src='https://i.ibb.co/FxzNzY4/main.png' alt='contacts' />
        </CentredHalf>
        <CentredHalf
          style={{ justifyContent: 'center', alignItems: 'baseline' }}
        >
          <h1>Візитна картка</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
            accumsan lacus vel facilisis.
          </p>
          <ButtonLink to='/details' text='Прочитати далі' />
        </CentredHalf>
      </section>
    </Container>
  );
};

export default MainSection;
