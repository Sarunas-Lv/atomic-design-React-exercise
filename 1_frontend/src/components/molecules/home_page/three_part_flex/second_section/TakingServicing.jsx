import React from 'react';
// Components Import
import DisplayFlexDiv from '../../../../atoms/divs/display_flex_div/DisplayFlexDiv';
import CircleDiv from '../../../../atoms/divs/circle_divs/default_circle/CircleDiv';
import Logos from '../../../../atoms/text/logos/Logos';
import Title from '../../../../atoms/text/title/Title';
import Paragraph from '../../../../atoms/text/paragraph/Paragraph';
// react-icons Import
import { MdEngineering } from 'react-icons/md';
import { GiGears, GiGearHammer } from 'react-icons/gi';
import { AiFillDollarCircle } from 'react-icons/ai';
const TakingServicing = ({ title, p, logo }) => {
  return (
    <DisplayFlexDiv gap='16px' justify='center' align='center'>
      <DisplayFlexDiv height='100%'>
        <CircleDiv color='white' size='47px'>
          <Logos color='black' size='28px'>
            {logo}
          </Logos>
        </CircleDiv>
      </DisplayFlexDiv>
      <DisplayFlexDiv direction='column' gap='8px'>
        <Title title02={true}>{title}</Title>
        <Paragraph p2={true} opacity={0.6}>
          {p}
        </Paragraph>
      </DisplayFlexDiv>
    </DisplayFlexDiv>
  );
};

export default TakingServicing;
