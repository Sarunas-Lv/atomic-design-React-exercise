import React from 'react';
import { StyledNavbar } from './NavBar.style';
import Ul from '../../../atoms/ul_li/Ul/Ul';
import Li from '../../../atoms/ul_li/Li/Li';
import Anchor from '../../../atoms/text/anchor/Anchor';
const NavBar = () => {
  return (
    <StyledNavbar>
      <Ul gap='32px'>
        <Li bgc='gray'>
          <Anchor link='#' p1={true} color='black'>
            Home
          </Anchor>
        </Li>
        <Li bgc='gray'>
          <Anchor link='#' p1={true} color='black'>
            About
          </Anchor>
        </Li>
        <Li bgc='gray'>
          <Anchor link='#' p1={true} color='black'>
            Services
          </Anchor>
        </Li>
        <Li bgc='gray'>
          <Anchor link='#' p1={true} color='black'>
            Blog
          </Anchor>
        </Li>
        <Li bgc='gray'>
          <Anchor link='#' p1={true} color='black'>
            Contact
          </Anchor>
        </Li>
      </Ul>
    </StyledNavbar>
  );
};

export default NavBar;
