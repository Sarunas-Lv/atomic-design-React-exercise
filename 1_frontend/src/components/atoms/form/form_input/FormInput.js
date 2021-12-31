import React from 'react';
import { StyledInput } from './FormInput.style';
const FormInput = ({ text, theme, type }) => {
  return <StyledInput type={type} theme={theme} placeholder={text} />;
};

export default FormInput;
