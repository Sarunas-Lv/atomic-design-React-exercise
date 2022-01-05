import React from 'react';
// Component Imports
import DisplayFlexDiv from '../../../atoms/divs/display_flex_div/DisplayFlexDiv';
import Paragraph from '../../../atoms/text/paragraph/Paragraph';
import Title from '../../../atoms/text/title/Title';
const FooterTwoPartTextElement = ({ text1, text2 }) => {
  return (
    <DisplayFlexDiv height='76px' direction='column' gap='8px'>
      <Paragraph opacity={0.6} color='white' p1={true}>
        {text1}
      </Paragraph>
      <Title title02={true} color='white'>
        {text2}
      </Title>
    </DisplayFlexDiv>
  );
};

export default FooterTwoPartTextElement;
