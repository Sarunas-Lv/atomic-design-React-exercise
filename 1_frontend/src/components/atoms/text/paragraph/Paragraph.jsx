import React from 'react';
import { StyledParagraph } from './Paragraph.Style';
const Paragraph = ({ children, color, p1, p2, opacity }) => {
  return (
    <StyledParagraph color={color} p1={p1} p2={p2} opacity={opacity}>
      {children}
    </StyledParagraph>
  );
};

export default Paragraph;
