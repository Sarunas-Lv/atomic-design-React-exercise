import React from 'react';
// Style Imports
import { StyledHomeForm } from './HomePageForm.style';
// Components Imports
import FormInput from '../../../atoms/form/form_input/FormInput';
import FormSubmit from '../../../atoms/form/submit_button/FormSubmit';
import DisplayFlexDiv from '../../../atoms/divs/display_flex_div/DisplayFlexDiv';
const HomePageForm = () => {
  return (
    <StyledHomeForm onSubmit={(e) => e.preventDefault()}>
      <FormInput
        type='text'
        text='Enter your location'
        margin='0'
        name='home1'
      />{' '}
      <FormInput
        type='text'
        text='Enter your location'
        margin='0'
        name='home2'
      />{' '}
      <FormInput
        type='text'
        text='Enter your location'
        margin='0'
        name='home3'
      />{' '}
      <FormInput
        type='tel'
        text='Your phone number'
        margin='0'
        name='home4_phone'
      />
      <FormSubmit margin='28px 0 0 0' value='Get your quote' />
    </StyledHomeForm>
  );
};

export default HomePageForm;
