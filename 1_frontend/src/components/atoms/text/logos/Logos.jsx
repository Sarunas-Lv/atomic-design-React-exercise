import React from 'react';
// Style Import
import { StyledLogos } from './Logos.style';

const Logos = ({ children, size, color, spacing }) => {
  return (
    <StyledLogos size={size} color={color} spacing={spacing}>
      {children}
    </StyledLogos>
  );
};

export default Logos;
