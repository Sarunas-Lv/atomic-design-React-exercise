import React from 'react';
// Component Imports
import DisplayFlexDiv from '../../../atoms/divs/display_flex_div/DisplayFlexDiv';
import Heading from '../../../atoms/text/heading/Heading';
import Logos from '../../../atoms/text/logos/Logos';
import FooterTwoPartTextElement from '../footer_two_part_text/FooterTwoPartTextElement';
// react-icons Imports
import { BsFacebook, BsTwitter, BsLinkedin, BsInstagram } from 'react-icons/bs';
const FooterTop = () => {
  return (
    <DisplayFlexDiv justify='center' align='center'>
      <DisplayFlexDiv
        width='1300px'
        height='473px'
        justify='center'
        align='center'
      >
        {/* Left */}
        <DisplayFlexDiv
          width='650px'
          height='222px'
          direction='column'
          justify='center'
          gap='64px'
        >
          <DisplayFlexDiv width='634px'>
            <Heading h3={true} color='white'>
              Get in touch with us for your service
            </Heading>
          </DisplayFlexDiv>
          <Logos spacing='22.4px' color='white' size='35px'>
            <BsFacebook /> <BsTwitter /> <BsLinkedin /> <BsInstagram />
          </Logos>
        </DisplayFlexDiv>
        {/* Left */}
        {/* Right */}
        <DisplayFlexDiv
          width='650px'
          height='100%'
          direction='column'
          gap='32px'
          justify='center'
        >
          <FooterTwoPartTextElement
            text1={'Help line number'}
            text2={'1800 266 24 52'}
          />
          <FooterTwoPartTextElement
            text1={'Adress'}
            text2={'NH 234 Public Square San Francisco 65368'}
          />
          <FooterTwoPartTextElement
            text1={'We are open'}
            text2={'Monday to Friday 9:00 AM to  10:00  AM'}
          />
        </DisplayFlexDiv>
        {/* Right */}
      </DisplayFlexDiv>
    </DisplayFlexDiv>
  );
};

export default FooterTop;
