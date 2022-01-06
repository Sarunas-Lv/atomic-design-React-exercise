import React from 'react';
// Components Import
import DisplayFlexDiv from '../../../atoms/divs/display_flex_div/DisplayFlexDiv';
import StatisticSingleDiv from '../../divs/statistic_div/StatisticSingleDiv';
const StaticsBanner = () => {
  return (
    <DisplayFlexDiv width='100%' gap='10%' color='gray'>
      <StatisticSingleDiv text1='20+' text2='Proffesional' />
      <StatisticSingleDiv text1='10+' text2='Years Eperience' />
      <StatisticSingleDiv text1='12K+' text2='Service Closed' />
      <StatisticSingleDiv text1='100%' text2='Customer Satisfaction' />
    </DisplayFlexDiv>
  );
};

export default StaticsBanner;
