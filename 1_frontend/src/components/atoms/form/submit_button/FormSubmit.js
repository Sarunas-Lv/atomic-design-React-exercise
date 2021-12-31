import React from 'react';
import { StyledSubmit } from './FormSubmit.style';
const FormSubmit = ({ value }) => {
  return <StyledSubmit type='submit' value={value} />;
};

export default FormSubmit;
