import React from 'react';
// Style Import
import { StyledSection } from './HomeProcessSection.style';
// Components Import
import Heading from '../../../../atoms/text/heading/Heading';
import Paragraph from '../../../../atoms/text/paragraph/Paragraph';
import Button from '../../../../atoms/buttons/common_button/Button';
import DisplayFlexDiv from '../../../../atoms/divs/display_flex_div/DisplayFlexDiv';
import BlueCircleDiv from '../../../../atoms/divs/circle_divs/blue_circle/BlueCircleDiv';
import BorderDiv from '../../../../atoms/divs/border_div/BorderDiv';
import GetQuoteComponent from '../../../../molecules/home_page/get_quote_organism/GetQuoteComponent';
import Title from '../../../../atoms/text/title/Title';
const HomeProcessSection = () => {
  return (
    <StyledSection>
      <DisplayFlexDiv
        gap='130px'
        height='527px'
        justify='center'
        align='flex-start'
      >
        {/* Left */}
        <DisplayFlexDiv direction='column' justify='center' gap='32px'>
          <DisplayFlexDiv
            direction='column'
            justify='center'
            gap='16px'
            width='524px'
          >
            <Heading h2={true}>
              We follow a clear process to help you out.
            </Heading>
            <DisplayFlexDiv width='437px'>
              <Paragraph p2={true} opacity={0.6}>
                Through True Rich Attended does no end it his mother since real
                had half every him case in packages enquire.
              </Paragraph>
            </DisplayFlexDiv>
          </DisplayFlexDiv>
          <Button color='red'>Learn More</Button>
        </DisplayFlexDiv>
        {/* Right */}
        <DisplayFlexDiv height='527px' gap='24px'>
          <DisplayFlexDiv direction='column' align='center'>
            <BlueCircleDiv>01</BlueCircleDiv>
            <BorderDiv height='42px' left='2px dashed var(--red)' />
            <BlueCircleDiv>02</BlueCircleDiv>
            <BorderDiv height='42px' left='2px dashed var(--red)' />
            <BlueCircleDiv>03</BlueCircleDiv>
          </DisplayFlexDiv>
          <GetQuoteComponent />
        </DisplayFlexDiv>
      </DisplayFlexDiv>
    </StyledSection>
  );
};

export default HomeProcessSection;
