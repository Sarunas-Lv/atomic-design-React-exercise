import React from 'react';

import { StyledTitle } from './Title.style';
const Title = ({ children, title01, title02, color }) => {
  return (
    <StyledTitle title01={title01} title02={title02} color={color}>
      {children}
    </StyledTitle>
  );
};

export default Title;
