import React from 'react';
// Component Import
import DisplayFlexDiv from '../../../atoms/divs/display_flex_div/DisplayFlexDiv';
import Heading from '../../../atoms/text/heading/Heading';
import Title from '../../../atoms/text/title/Title';
const StatisticSingleDiv = ({ text1, text2 }) => {
  return (
    <DisplayFlexDiv direction='column' justify='center' gap='2px'>
      <Heading color='blue' h2={true}>
        {text1}
      </Heading>
      <Title opacity={0.7} title02={true}>
        {text2}
      </Title>
    </DisplayFlexDiv>
  );
};

export default StatisticSingleDiv;
