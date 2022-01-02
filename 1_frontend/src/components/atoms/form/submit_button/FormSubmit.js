import React from 'react';
import { StyledSubmit } from './FormSubmit.style';
const FormSubmit = ({ value, margin }) => {
  return <StyledSubmit type='submit' value={value} margin={margin} />;
};

export default FormSubmit;
