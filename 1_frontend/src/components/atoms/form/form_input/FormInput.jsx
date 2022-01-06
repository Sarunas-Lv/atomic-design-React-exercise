import React from 'react';
import { StyledInput } from './FormInput.style';
const FormInput = ({ text, theme, type, margin, }) => {
  return (
    <StyledInput type={type} theme={theme} placeholder={text} margin={margin} />
  );
};

export default FormInput;
