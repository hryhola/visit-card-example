import React from 'react';

import CentredHalf from '../../components/CentredHalf/CentredHalf';
import Container from '../../components/Container/Container';
import Card from '../../components/Card/Card';

const ContactsSection = () => {
  return (
    <Container>
      <section id='main-section'>
        <CentredHalf>
          <img src='./images/contacts.png' alt='details' />
        </CentredHalf>
        <CentredHalf
          style={{ alignItems: 'baseline', justifyContent: 'center' }}
        >
          <Card title='Facebook' text='https://www.facebook.com/userid' />
          &nbsp;
          <Card title='Phone' text='+321232123334' />
        </CentredHalf>
      </section>
    </Container>
  );
};

export default ContactsSection;
