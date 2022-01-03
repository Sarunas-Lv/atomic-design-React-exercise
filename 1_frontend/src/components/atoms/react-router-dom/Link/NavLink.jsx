import React from 'react';
import { StyledLink } from './NavLink.styled';
const NavLink = ({ children }) => {
  return <StyledLink>{children}</StyledLink>;
};

export default NavLink;
