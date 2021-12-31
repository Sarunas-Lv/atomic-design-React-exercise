import React from 'react';
import { StyledButton } from './Button.style';
const Button = ({ children, action, color }) => {
  return (
    <StyledButton onClick={action} color={color}>
      {children}
    </StyledButton>
  );
};

export default Button;
