import React from 'react';
import { StyledCaption } from './Caption.style';
const Caption = ({ children, color }) => {
  return <StyledCaption color={color}>{children}</StyledCaption>;
};

export default Caption;
