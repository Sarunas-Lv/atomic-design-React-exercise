import React from 'react';
// Import Components
import DisplayFlexDiv from '../../../../atoms/divs/display_flex_div/DisplayFlexDiv';
import Logos from '../../../../atoms/text/logos/Logos';
import Caption from '../../../../atoms/text/caption/Caption';
import Paragraph from '../../../../atoms/text/paragraph/Paragraph';
// Import react-icons
import { BsClockFill } from 'react-icons/bs';
const WereOpen = () => {
  return (
    <DisplayFlexDiv
      width='372px'
      height='120px'
      justify='center'
      align='center'
      gap='13px'
    >
      <Logos color='gray' size='30px'>
        <BsClockFill />
      </Logos>
      <DisplayFlexDiv direction='column' justify='center' align='flex-start'>
        <Caption color='gray'>We are open</Caption>
        <Paragraph p1={true} color='black'>
          Monday to Friday 9:00 AM to 10:00 AM
        </Paragraph>
      </DisplayFlexDiv>
    </DisplayFlexDiv>
  );
};

export default WereOpen;
