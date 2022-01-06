import React from 'react';
// style Imports
import { StyledSection } from './HomeFirstSection.style';
// Component Imports
import DisplayFlexDiv from '../../../../atoms/divs/display_flex_div/DisplayFlexDiv';
import Heading from '../../../../atoms/text/heading/Heading';
import Button from '../../../../atoms/buttons/common_button/Button';
import WereOpen from '../../../../molecules/home_page/three_part_flex/first_section/WereOpen';
import Img from '../../../../atoms/divs/image_div/ImgDiv';
import MECHANIC from '../../../../../assets/images/home_services/mechanic1.jpg';
import RelativeDiv from '../../../../molecules/divs/relative_div/RelativeDiv';
import CircleDiv from '../../../../atoms/divs/circle_divs/default_circle/CircleDiv';
import Title from '../../../../atoms/text/title/Title';
import Paragraph from '../../../../atoms/text/paragraph/Paragraph';
import StarRating from '../../../../molecules/home_page/star_rating/StarRating';
const HomeFirstSection = ({ color }) => {
  return (
    <StyledSection color={color}>
      <DisplayFlexDiv
        width='1300px'
        height='632px'
        justify='center'
        align='center'
      >
        <DisplayFlexDiv width='650px' direction='column' gap='32px'>
          <Heading h1={true}>
            Get your vehicle service done online at one place
          </Heading>
          <Button color='red'>Book a service</Button>
          <WereOpen />
        </DisplayFlexDiv>
        <DisplayFlexDiv height='632px' width='625px'>
          {' '}
          <Img height='632px' width='605px' url={MECHANIC} contain={true}>
            <RelativeDiv top='80px' right='40px'>
              <CircleDiv
                color='green'
                size='70px'
                action={() => (window.location.href = 'tel:864562927')}
              >
                <Title title02={true} color='white'>
                  24
                </Title>
                <Paragraph color='white' p2={true}>
                  hr
                </Paragraph>
              </CircleDiv>
              <DisplayFlexDiv width='160px'>
                <Title title02={true} color='black'>
                  Quick service
                </Title>
              </DisplayFlexDiv>
            </RelativeDiv>
            <StarRating top='270px' left='300px' />
          </Img>
        </DisplayFlexDiv>
      </DisplayFlexDiv>
    </StyledSection>
  );
};

export default HomeFirstSection;
