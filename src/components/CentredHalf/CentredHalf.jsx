import React from 'react';
import './CentredHalf.css';

const CentredHalf = ({ children, ...props }) => (
  <div className='centred-half' {...props}>
    {children}
  </div>
);

export default CentredHalf;
