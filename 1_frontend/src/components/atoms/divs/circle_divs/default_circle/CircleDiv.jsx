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
  action,
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
      action={action}
      onClick={action ? () => action() : console.log('blep')}
    >
      {children}
    </StyledDefaultCircle>
  );
};

export default CircleDiv;
