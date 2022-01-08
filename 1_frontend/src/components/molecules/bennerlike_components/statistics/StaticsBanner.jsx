import React from 'react';
// Style Import
import {StyledHomeGetInTouchBanner} from './StatiscsBanner.style'
// Components Import
import DisplayFlexDiv from '../../../atoms/divs/display_flex_div/DisplayFlexDiv';
import StatisticSingleDiv from '../../divs/statistic_div/StatisticSingleDiv';
const StaticsBanner = ({color}) => {
  return (
    <StyledHomeGetInTouchBanner color={color} >
    <DisplayFlexDiv width='80%' gap='215px' color='gray'>
      <StatisticSingleDiv text1='20+' text2='Proffesional' />
      <StatisticSingleDiv text1='10+' text2='Years Eperience' />
      <StatisticSingleDiv text1='12K+' text2='Service Closed' />
      <StatisticSingleDiv text1='100%' text2='Customer Satisfaction' />
    </DisplayFlexDiv>
    </StyledHomeGetInTouchBanner>
  );
};

export default StaticsBanner;
