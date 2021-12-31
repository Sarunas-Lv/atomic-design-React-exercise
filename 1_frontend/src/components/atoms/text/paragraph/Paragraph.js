import React from 'react';
import { StyledParagraph } from './Paragraph.Style';
const Paragraph = ({ children, color, p1, p2 }) => {
  return (
    <StyledParagraph color={color} p1={p1} p2={p2}>
      {children}
    </StyledParagraph>
  );
};

export default Paragraph;
