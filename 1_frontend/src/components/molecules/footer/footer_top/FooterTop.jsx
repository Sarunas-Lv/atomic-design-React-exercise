import React from 'react';
// Component Imports
import DisplayFlexDiv from '../../../atoms/divs/display_flex_div/DisplayFlexDiv';
import Heading from '../../../atoms/text/heading/Heading';
import Logos from '../../../atoms/text/logos/Logos';
import Paragraph from '../../../atoms/text/paragraph/Paragraph';
import Title from '../../../atoms/text/title/Title';
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
          width='50%'
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
          width='50%'
          height='100%'
          direction='column'
          gap='32px'
          justify='center'
        >
          <DisplayFlexDiv height='76px' direction='column' gap='8px'>
            <Paragraph opacity={0.6} color='white' p1={true}>
              Help line number
            </Paragraph>
            <Title title02={true} color='white'>
              1800 266 24 52
            </Title>
          </DisplayFlexDiv>

          <DisplayFlexDiv height='76px' direction='column' gap='8px'>
            <Paragraph opacity={0.6} color='white' p1={true}>
              Adress
            </Paragraph>
            <Title title02={true} color='white'>
              NH 234 Public Square San Francisco 65368
            </Title>
          </DisplayFlexDiv>

          <DisplayFlexDiv height='76px' direction='column' gap='8px'>
            <Paragraph opacity={0.6} color='white' p1={true}>
              We are open
            </Paragraph>
            <Title title02={true} color='white'>
              Monday to Friday 9:00 AM to  10:00  AM
            </Title>
          </DisplayFlexDiv>
        </DisplayFlexDiv>
        {/* Right */}
      </DisplayFlexDiv>
    </DisplayFlexDiv>
  );
};

export default FooterTop;
