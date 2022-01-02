import React from 'react';
// Style import
import { StyledHeader, StyledPageLogoDiv } from './Header.style';
// Component Inport
import CircleDiv from '../../atoms/divs/circle_divs/default_circle/CircleDiv';
import DisplayFlexDiv from '../../atoms/divs/display_flex_div/DisplayFlexDiv';
import Logos from '../../atoms/text/logos/Logos';
import BorderDiv from '../../atoms/divs/border_div/BorderDiv';
import Paragraph from '../../atoms/text/paragraph/Paragraph';
import LOGO from '../../../assets/images/page_logo/logo.png';
//  React-icon Import
import { BsFillTelephoneFill } from 'react-icons/bs';
const Header = () => {
  return (
    <StyledHeader>
      <DisplayFlexDiv width='100%' justify='center' align='center'>
        <StyledPageLogoDiv>
          <img src={LOGO} alt='finsweet logo' />
        </StyledPageLogoDiv>
        <DisplayFlexDiv gap='32px' width='50%'>
          <ul></ul>
          <BorderDiv height='42px' left='2px solid var(--gray)' />
          <DisplayFlexDiv justify='center' align='center'>
            <CircleDiv color='green' size='40px'>
              <Logos color='white' size='22px'>
                <BsFillTelephoneFill />
              </Logos>
            </CircleDiv>
            <DisplayFlexDiv
              direction='column'
              justify='center'
              align='center'
              width='182px'
              height='56px'
            >
              <Paragraph p2={true} color='gray'>
                Road Assistance
              </Paragraph>
              <Paragraph p1={true}>1800 265 24 52</Paragraph>
            </DisplayFlexDiv>
          </DisplayFlexDiv>
        </DisplayFlexDiv>
      </DisplayFlexDiv>
    </StyledHeader>
  );
};

export default Header;
