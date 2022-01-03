import React from 'react';
// Style Imports
import { StyledFooter } from './Footer.style';
// Component Imports
import FooterTop from '../../molecules/footer/footer_top/FooterTop';
import FooterBottom from '../../molecules/footer/footer_bottom/FooterBottom';
const Footer = () => {
  return (
    <StyledFooter>
      <FooterTop />
      <FooterBottom />
    </StyledFooter>
  );
};

export default Footer;
