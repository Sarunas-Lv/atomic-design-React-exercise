import React from 'react';
// Component Imports
import DisplayFlexDiv from '../../../atoms/divs/display_flex_div/DisplayFlexDiv';
import Heading from '../../../atoms/text/heading/Heading';
import Logos from '../../../atoms/text/logos/Logos';
import Paragraph from '../../../atoms/text/paragraph/Paragraph';
import Title from '../../../atoms/text/title/Title';
import WHTLOGO from '../../../../assets/images/page_logo/logo2.png';
import { StyledBottomogoDiv } from './FooterBottom.style';
import FooterUl from '../footer_ul/FooterUl';
const FooterBottom = () => {
  return (
    <DisplayFlexDiv
      justify='center'
      align='center'
      width='100%'
      height='157px'
      color='black'
    >
      <DisplayFlexDiv
        width='1920px'
        justify='center'
        align='center'
        gap='206px'
      >
        <StyledBottomogoDiv>
          <img
            src={WHTLOGO}
            alt='finsweet logo'
            onClick={() => (window.location.href = 'http://localhost:3000')}
          />
        </StyledBottomogoDiv>
        <FooterUl />
        <Paragraph opacity={0.6} p2={true} color='white'>
          &Copyright
        </Paragraph>
      </DisplayFlexDiv>
    </DisplayFlexDiv>
  );
};

export default FooterBottom;
