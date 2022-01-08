import React from 'react'
// Style Import
import {StyledBrandsSection} from './HomeBrandsSection.style'
// Component Imports
import DisplayFlexDiv from '../../../../atoms/divs/display_flex_div/DisplayFlexDiv'
import Heading from '../../../../atoms/text/heading/Heading'
import Img from '../../../../atoms/divs/image_div/ImgDiv'
import Anchor from '../../../../atoms/text/anchor/Anchor'
import FIRST from '../../../../../assets/images/brands/first_brand.png'
import SECOND from '../../../../../assets/images/brands/second_brand.png'
import THIRD from '../../../../../assets/images/brands/third_brand.png'
import FOURTH from '../../../../../assets/images/brands/fourt_brand.png'
import FIFT from '../../../../../assets/images/brands/fift_brand.png'

const HomeBrandsSection = () => {
    return (
        <StyledBrandsSection>
            <DisplayFlexDiv direction='column' align='center' justify='center' gap='90px'>
                <Heading h3={true}>Brands we Serve</Heading>
                <DisplayFlexDiv width='1280px' heigh='128px' align='center' justify='center' gap='110px'>
                    <Anchor link='#'><Img url={FIRST} height='32px' width='165px' bgs='contain' grow={true}/></Anchor>
                    <Anchor link='#'><Img url={SECOND} height='37px' width='158px' grow={true}/></Anchor>
                    <Anchor link='#'><Img url={THIRD} height='35px' width='152px' grow={true}/></Anchor>
                    <Anchor link='#'><Img url={FOURTH} height='30px' width='150px' grow={true}/></Anchor>
                    <Anchor link='#'><Img url={FIFT} height='38px' width='161px' grow={true}/></Anchor>
                </DisplayFlexDiv>
                <DisplayFlexDiv width='1280px' heigh='128px' align='center' justify='center' gap='110px'>
                    <Anchor link='#'><Img url={FIRST} height='32px' width='165px' bgs='contain' grow={true}/></Anchor>
                    <Anchor link='#'><Img url={SECOND} height='37px' width='158px' grow={true}/></Anchor>
                    <Anchor link='#'><Img url={THIRD} height='35px' width='152px' grow={true}/></Anchor>
                    <Anchor link='#'><Img url={FOURTH} height='30px' width='150px' grow={true}/></Anchor>
                    <Anchor link='#'><Img url={FIFT} height='38px' width='161px' grow={true}/></Anchor>
                </DisplayFlexDiv>
            </DisplayFlexDiv>
        </StyledBrandsSection>
    )
}

export default HomeBrandsSection
