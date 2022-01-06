import React from 'react';
// Style Import
import { StyledSection } from './HomeProcessSection.style';
// Components Import
import Heading from '../../../../atoms/text/heading/Heading';
import Paragraph from '../../../../atoms/text/paragraph/Paragraph';
import Button from '../../../../atoms/buttons/common_button/Button';
import DisplayFlexDiv from '../../../../atoms/divs/display_flex_div/DisplayFlexDiv';
import GetQuoteComponent from '../../../../molecules/home_page/get_quote_organism/GetQuoteComponent';
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
        <GetQuoteComponent />
      </DisplayFlexDiv>
    </StyledSection>
  );
};

export default HomeProcessSection;
