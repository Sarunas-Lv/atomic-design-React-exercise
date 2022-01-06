import React from 'react';
// Style Import
import { StyledGetQuoteDiv } from './GetQuoteComponent.style';
// components Import
import DisplayFlexDiv from '../../../atoms/divs/display_flex_div/DisplayFlexDiv';
import Title from '../../../atoms/text/title/Title';
import Paragraph from '../../../atoms/text/paragraph/Paragraph';
import BorderDiv from '../../../atoms/divs/border_div/BorderDiv';
import BlueCircleDiv from '../../../atoms/divs/circle_divs/blue_circle/BlueCircleDiv';
const GetQuoteComponent = () => {
  return (
    <DisplayFlexDiv height='527px' gap='24px'>
      <DisplayFlexDiv direction='column' align='center'>
        <BlueCircleDiv>01</BlueCircleDiv>
        <BorderDiv height='42px' left='2px dashed var(--red)' />
        <BlueCircleDiv>02</BlueCircleDiv>
        <BorderDiv height='42px' left='2px dashed var(--red)' />
        <BlueCircleDiv>03</BlueCircleDiv>
      </DisplayFlexDiv>
      <StyledGetQuoteDiv>
        <DisplayFlexDiv direction='column' gap='8px' width='436px'>
          <Title title01={true}>Get a Quote</Title>
          <DisplayFlexDiv width='338px'>
            <Paragraph p1={true} opacity={0.6}>
              Through True Rich Attended does no end it his mother since real
              had half every.
            </Paragraph>
          </DisplayFlexDiv>
        </DisplayFlexDiv>
        <DisplayFlexDiv direction='column' gap='8px' width='436px'>
          <Title title01={true}>Get a Quote</Title>
          <DisplayFlexDiv width='338px'>
            <Paragraph p1={true} opacity={0.6}>
              Through True Rich Attended does no end it his mother since real
              had half every.
            </Paragraph>
          </DisplayFlexDiv>
        </DisplayFlexDiv>
        <DisplayFlexDiv direction='column' gap='8px' width='436px'>
          <Title title01={true}>Get a Quote</Title>
          <DisplayFlexDiv width='338px'>
            <Paragraph p1={true} opacity={0.6}>
              Through True Rich Attended does no end it his mother since real
              had half every.
            </Paragraph>
          </DisplayFlexDiv>
        </DisplayFlexDiv>
      </StyledGetQuoteDiv>
    </DisplayFlexDiv>
  );
};

export default GetQuoteComponent;
