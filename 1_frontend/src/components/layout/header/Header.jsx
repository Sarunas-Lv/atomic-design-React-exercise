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
import Anchor from '../../atoms/text/anchor/Anchor';
import NavBar from '../../molecules/header/navbar/NavBar';
//  React-icon Import
import { BsFillTelephoneFill } from 'react-icons/bs';
const Header = () => {
  return (
    <StyledHeader>
      <DisplayFlexDiv width='100%' justify='center' align='center'>
        {/* LOGO SECTION */}
        <StyledPageLogoDiv>
          <img
            src={LOGO}
            alt='finsweet logo'
            onClick={() => (window.location.href = 'http://localhost:3000')}
          />
        </StyledPageLogoDiv>
        {/* LOGO SECTION */}
        {/* NAVBAR SECTION */}
        <DisplayFlexDiv gap='32px' width='40%' justify='center' align='center'>
          <NavBar />
          <BorderDiv height='42px' left='2px solid var(--gray)' />
          {/* CONTACT SECTION */}
          <DisplayFlexDiv justify='center' align='center'>
            <CircleDiv
              color='green'
              size='40px'
              action={() => (window.location.href = 'tel:864562927')}
            >
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
              <Paragraph p2={true} opacity={0.7}>
                Road Assistance
              </Paragraph>
              <Anchor link='tel:864562927'>864562927</Anchor>
            </DisplayFlexDiv>
          </DisplayFlexDiv>
          {/* CONTACT SECTION */}
        </DisplayFlexDiv>
        {/* NAVBAR SECTION */}
      </DisplayFlexDiv>
    </StyledHeader>
  );
};

export default Header;
