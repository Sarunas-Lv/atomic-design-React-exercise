import React from 'react';

import { StyledHeading } from './Heading.style';
const Heading = ({ children, h1, h2, h3, h4, h5, h6, color }) => {
  return (
    <StyledHeading
      h1={h1}
      h2={h2}
      h3={h3}
      h4={h4}
      h5={h5}
      h6={h6}
      color={color}
    >
      {children}
    </StyledHeading>
  );
};

export default Heading;
