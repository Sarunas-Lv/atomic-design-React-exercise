import React from 'react';
import { StyledAnchor } from './Anchor.style';
const Anchor = ({ link, children, p1, p2, color }) => {
  return (
    <StyledAnchor href={link} p1={p1} p2={p2} color={color}>
      {children}
    </StyledAnchor>
  );
};

export default Anchor;
