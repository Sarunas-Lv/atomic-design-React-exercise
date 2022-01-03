import React from 'react';
import { StyledUl } from './Ul.style';
const Ul = ({ children, padding, gap }) => {
  return (
    <StyledUl padding={padding} gap={gap}>
      {children}
    </StyledUl>
  );
};

export default Ul;
