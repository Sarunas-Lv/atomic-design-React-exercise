import React from 'react';
import CircleDiv from '../default_circle/CircleDiv';
const BlueCircleDiv = ({ children }) => {
  return (
    <div>
      <CircleDiv color='blue' size='72px' relative={true} top='20px' zIndex='1'>
        {children}
      </CircleDiv>
      <CircleDiv
        color='white'
        size='42px'
        relative={true}
        bottom='21px'
        left='15px'
        zIndex='2'
        opacity={true}
      ></CircleDiv>
    </div>
  );
};

export default BlueCircleDiv;
