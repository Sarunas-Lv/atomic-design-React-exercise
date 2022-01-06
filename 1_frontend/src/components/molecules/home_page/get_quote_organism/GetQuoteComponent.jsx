import React from 'react';
// Style Import
import { StyledGetQuoteDiv } from './GetQuoteComponent.style';
// components Import
import DisplayFlexDiv from '../../../atoms/divs/display_flex_div/DisplayFlexDiv';
import Title from '../../../atoms/text/title/Title';
import Paragraph from '../../../atoms/text/paragraph/Paragraph';
const GetQuoteComponent = () => {
  return (
    <StyledGetQuoteDiv>
      <DisplayFlexDiv direction='column' gap='8px' width='436px'>
        <Title title01={true}>Get a Quote</Title>
        <DisplayFlexDiv width='338px'>
          <Paragraph p1={true} opacity={0.6}>
            Through True Rich Attended does no end it his mother since real had
            half every.
          </Paragraph>
        </DisplayFlexDiv>
      </DisplayFlexDiv>
      <DisplayFlexDiv direction='column' gap='8px' width='436px'>
        <Title title01={true}>Get a Quote</Title>
        <DisplayFlexDiv width='338px'>
          <Paragraph p1={true} opacity={0.6}>
            Through True Rich Attended does no end it his mother since real had
            half every.
          </Paragraph>
        </DisplayFlexDiv>
      </DisplayFlexDiv>
      <DisplayFlexDiv direction='column' gap='8px' width='436px'>
        <Title title01={true}>Get a Quote</Title>
        <DisplayFlexDiv width='338px'>
          <Paragraph p1={true} opacity={0.6}>
            Through True Rich Attended does no end it his mother since real had
            half every.
          </Paragraph>
        </DisplayFlexDiv>
      </DisplayFlexDiv>
    </StyledGetQuoteDiv>
  );
};

export default GetQuoteComponent;
