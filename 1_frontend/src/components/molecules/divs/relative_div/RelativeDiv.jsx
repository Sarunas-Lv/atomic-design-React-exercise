import React from 'react';
// Import Style
import { StyledRelativeInner, StyledRelativeOuter } from './RelativeDiv.style';
const RelativeDiv = ({ children, top, left, right, bottom }) => {
  return (
    <StyledRelativeOuter top={top} left={left} right={right} bottom={bottom}>
      <StyledRelativeInner>{children}</StyledRelativeInner>
    </StyledRelativeOuter>
  );
};

export default RelativeDiv;
