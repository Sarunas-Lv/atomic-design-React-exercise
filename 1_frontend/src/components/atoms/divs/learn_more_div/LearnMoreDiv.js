import React from 'react';
//style import
import { StyledDiv } from './LearnMoreDiv.style';
import { StyledB } from './LearnMoreDiv.style';
// import react-icon
import { AiOutlineArrowRight } from 'react-icons/ai';
//import components
import DisplayFlexDiv from '../display_flex_div/DisplayFlexDiv';
import Paragraph from '../../text/paragraph/Paragraph';
import Logos from '../../text/logos/Logos';
const LearnMoreDiv = ({ text, url }) => {
  return (
    <StyledDiv onClick={() => (window.location.href = url)}>
      <DisplayFlexDiv gap='16px' align='center'>
        <StyledB>
          <Paragraph>{text}</Paragraph>
        </StyledB>
        <StyledB>
          <Logos size='24px'>
            <AiOutlineArrowRight />
          </Logos>
        </StyledB>
      </DisplayFlexDiv>
    </StyledDiv>
  );
};

export default LearnMoreDiv;
