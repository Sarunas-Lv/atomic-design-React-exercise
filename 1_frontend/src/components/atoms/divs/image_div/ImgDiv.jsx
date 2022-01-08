import React from 'react';
// Style imports
import { StyledImg } from './ImgDiv.style';
const Img = ({ children, url, height, width, position, bgs, grow }) => {
  return (
    <StyledImg
      position={position}
      bgs={bgs}
      url={url}
      height={height}
      width={width}
      grow={grow}
    >
      {children}
    </StyledImg>
  );
};

export default Img;
