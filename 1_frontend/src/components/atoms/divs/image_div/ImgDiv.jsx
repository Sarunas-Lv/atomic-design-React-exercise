import React from 'react';
// Style imports
import { StyledImg } from './ImgDiv.style';
const Img = ({ children, url, height, width, position, contain, cover }) => {
  return (
    <StyledImg
      position={position}
      contain={contain}
      cover={cover}
      url={url}
      height={height}
      width={width}
    >{children}</StyledImg>
  );
};

export default Img;
