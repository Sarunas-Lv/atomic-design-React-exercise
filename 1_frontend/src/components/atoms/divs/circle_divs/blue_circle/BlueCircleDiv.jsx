import React from 'react';
// Style Import
import { StyledDiv } from './BlueCircleDiv.style';
// Components Import
import CircleDiv from '../default_circle/CircleDiv';
import Title from '../../../text/title/Title';
const BlueCircleDiv = ({ children }) => {
  return (
    <StyledDiv>
      <CircleDiv color='blue' size='72px' relative={true} top='20px' zIndex='1'>
        <Title color='white' title01={true}>
          {children}
        </Title>
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
    </StyledDiv>
  );
};

export default BlueCircleDiv;
