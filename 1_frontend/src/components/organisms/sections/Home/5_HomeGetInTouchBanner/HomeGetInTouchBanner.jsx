import React from 'react';
// Style Import
import { StyledHomeGetInTouchBanner } from './HomeGetInTouchBanner.style';
// Component Import
import StaticsBanner from '../../../../molecules/bennerlike_components/statistics/StaticsBanner';
import GetInTouchBanner from '../../../../molecules/bennerlike_components/get_in_touch/GetInTouchBanner';

const HomeGetInTouchBanner = ({color}) => {
  return (
    <StyledHomeGetInTouchBanner color={color}>
      <GetInTouchBanner />
      <StaticsBanner />
    </StyledHomeGetInTouchBanner>
  );
};

export default HomeGetInTouchBanner;
