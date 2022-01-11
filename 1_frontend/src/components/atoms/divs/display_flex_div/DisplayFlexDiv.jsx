import React from 'react';
import { StyledDisplayFlexDiv } from './DisplayFlexDiv.style';
const DisplayFlexDiv = ({
  children,
  direction,
  wrap,
  justify,
  align,
  gap,
  color,
  width,
  height,
  padding
}) => {
  return (
    <StyledDisplayFlexDiv
      direction={direction}
      wrap={wrap}
      justify={justify}
      align={align}
      gap={gap}
      color={color}
      width={width}
      height={height}
      padding={padding}
    >
      {children}
    </StyledDisplayFlexDiv>
  );
};

export default DisplayFlexDiv;
