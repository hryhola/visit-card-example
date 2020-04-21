import React from 'react';

import CentredHalf from '../../components/CentredHalf/CentredHalf';
import Container from '../../components/Container/Container';
import Card from '../../components/Card/Card';

const DetailsSection = () => {
  return (
    <Container>
      <section id='main-section'>
        <CentredHalf>
          <Card
            title='Картка'
            text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. '
          />
          <Card
            title='Картка'
            text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. '
          />
        </CentredHalf>
        <CentredHalf>
          <img src='https://i.ibb.co/tDx1nrw/details.png' alt='details' />
        </CentredHalf>
      </section>
    </Container>
  );
};

export default DetailsSection;
