import React from 'react';
// Style Import
import { StyledGetinTouchBanner } from './GetInTouchBanner.style';
// Component Import
import DisplayFlexDiv from '../../../atoms/divs/display_flex_div/DisplayFlexDiv';
import Button from '../../../atoms/buttons/common_button/Button';
import Heading from '../../../atoms/text/heading/Heading';
import Img from '../../../atoms/divs/image_div/ImgDiv';
import FIRSTPIC from '../../../../assets/images/home_services/mechanic2.jpg';
import SECONDPIC from '../../../../assets/images/home_services/engine.jpg';
const GetInTouchBanner = () => {
  return (
    <StyledGetinTouchBanner>
      <Img url={FIRSTPIC} width='20%' height='100%' bgs='cover'></Img>
      <DisplayFlexDiv
        width='40%'
        height='100%'
        color='red'
        direction='column'
        justify='center'
        align='center'
        gap='64px'
      >
        <DisplayFlexDiv height='fit-content' width='79%' direction='column'>
          <Heading h3={true} color='white'>
            Get in touch with us for{' '}
          </Heading>
          <Heading h3={true} color='white'>
            {' '}
            your service related query
          </Heading>
        </DisplayFlexDiv>
        <DisplayFlexDiv width='79%'>
          <Button
            color={'black'}
            action={() => (window.location.herf = 'http://localhost:3000')}
          >
            Contact Us
          </Button>
        </DisplayFlexDiv>
      </DisplayFlexDiv>
      <Img url={SECONDPIC} width='40%' height='100%' bgs='cover'></Img>
    </StyledGetinTouchBanner>
  );
};

export default GetInTouchBanner;
