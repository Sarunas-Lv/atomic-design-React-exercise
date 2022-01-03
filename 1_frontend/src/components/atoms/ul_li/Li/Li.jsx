import React from 'react';
import { StyledLi } from './Li.style';
const Li = ({ children, pl, pr, pb, pt, ml, mr, mb, mt, bgc }) => {
  return (
    <StyledLi
      pl={pl}
      pr={pr}
      pb={pb}
      pt={pt}
      ml={ml}
      mr={mr}
      mb={mb}
      mt={mt}
      bgc={bgc}
    >
      {children}
    </StyledLi>
  );
};

export default Li;
