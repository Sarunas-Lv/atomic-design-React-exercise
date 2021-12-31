import React from 'react';
import { StyledDefaultCircle } from './CircleDiv.style';
const CircleDiv = ({
  children,
  color,
  size,
  relative,
  top,
  bottom,
  left,
  right,
  zIndex,
  opacity,
}) => {
  return (
    <StyledDefaultCircle
      color={color}
      size={size}
      relative={relative}
      top={top}
      bottom={bottom}
      left={left}
      right={right}
      zIndex={zIndex}
      opacity={opacity}
    >
      {children}
    </StyledDefaultCircle>
  );
};

export default CircleDiv;
