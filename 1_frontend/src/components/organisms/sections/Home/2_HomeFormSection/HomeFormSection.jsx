import React from 'react';
// Style Import
import { StyledFormSection } from './HomeFormSection.style';
// Components Import
import DisplayFlexDiv from '../../../../atoms/divs/display_flex_div/DisplayFlexDiv';
import Heading from '../../../../atoms/text/heading/Heading';
import TakingServicing from '../../../../molecules/home_page/three_part_flex/second_section/TakingServicing';
import LearnMoreDiv from '../../../../atoms/divs/learn_more_div/LearnMoreDiv';
// react-icons Import
import { MdEngineering } from 'react-icons/md';
import { GiGearHammer } from 'react-icons/gi';
import { AiFillDollarCircle } from 'react-icons/ai';
import HomePageForm from '../../../form/homepage_form/HomePageForm';
const HomeFormSection = () => {
  return (
    <StyledFormSection>
      <DisplayFlexDiv justify='center' align='center' gap='71px'>
        <DisplayFlexDiv
          width='583px'
          direction='column'
          justify='center'
          gap='53px'
        >
          <Heading h2={true} shadow={true}>
            We are taking car servicing seriously
          </Heading>
          <DisplayFlexDiv
            direction='column'
            justify='center'
            align='flex-end'
            gap='37px'
          >
            <TakingServicing
              logo={<GiGearHammer />}
              title='Convenient service'
              p='Through True Rich Attended does no end it his mother since real had half every him.'
            />
            <TakingServicing
              logo={<MdEngineering />}
              title='Expert mechanics'
              p='Through True Rich Attended does no end it his mother since real had half every him.'
            />
            <TakingServicing
              logo={<AiFillDollarCircle />}
              title='Transparent pricing'
              p='Through True Rich Attended does no end it his mother since real had half every him.'
            />
            <LearnMoreDiv text='Know more about us' url='google.com' />
          </DisplayFlexDiv>
        </DisplayFlexDiv>
        <DisplayFlexDiv
          width='627px'
          height='608px'
          direction='column'
          gap='32px'
          padding='10px 0px 0px 0px'
        >
          <Heading h3={true}>Get a quote for the car service</Heading>
          <HomePageForm />
        </DisplayFlexDiv>
      </DisplayFlexDiv>
    </StyledFormSection>
  );
};

export default HomeFormSection;
