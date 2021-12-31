import React from 'react';
import { StyledDisplayFlexDiv } from './DisplayFlexDiv.style';
const DisplayFlexDiv = ({ children, direction, wrap, justify, align, gap }) => {
  return (
    <StyledDisplayFlexDiv
      direction={direction}
      wrap={wrap}
      justify={justify}
      align={align}
      gap={gap}
    >
      {children}
    </StyledDisplayFlexDiv>
  );
};

export default DisplayFlexDiv;
