import React from 'react';
import { StyledBorderDiv } from './BorderDiv.style';
const BorderDiv = ({
  children,
  width,
  height,
  padding,
  top,
  bottom,
  left,
  right,
  border,
  color,
}) => {
  return (
    <StyledBorderDiv
      width={width}
      height={height}
      padding={padding}
      top={top}
      bottom={bottom}
      left={left}
      right={right}
      border={border}
      color={color}
    >
      {children}
    </StyledBorderDiv>
  );
};

export default BorderDiv;
