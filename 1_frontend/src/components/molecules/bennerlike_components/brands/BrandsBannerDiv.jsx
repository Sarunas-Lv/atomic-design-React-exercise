import React from 'react'
// Component Import
import DisplayFlexDiv from '../../../atoms/divs/display_flex_div/DisplayFlexDiv'
import Anchor from '../../../atoms/text/anchor/Anchor'
import Img from '../../../atoms/divs/image_div/ImgDiv'
import FIRST from '../../../../assets/images/brands/first_brand.png'
import SECOND from '../../../../assets/images/brands/second_brand.png'
import THIRD from '../../../../assets/images/brands/third_brand.png'
import FOURTH from '../../../../assets/images/brands/fourt_brand.png'
import FIFT from '../../../../assets/images/brands/fift_brand.png'
const BrandsBannerDiv = () => {
    return (
        <DisplayFlexDiv width='1280px' heigh='128px' align='center' justify='center' gap='110px'>
                    <Anchor link='#'><Img url={FIRST} height='32px' width='165px' bgs='contain' grow={true}/></Anchor>
                    <Anchor link='#'><Img url={SECOND} height='37px' width='158px' grow={true}/></Anchor>
                    <Anchor link='#'><Img url={THIRD} height='35px' width='152px' grow={true}/></Anchor>
                    <Anchor link='#'><Img url={FOURTH} height='30px' width='150px' grow={true}/></Anchor>
                    <Anchor link='#'><Img url={FIFT} height='38px' width='161px' grow={true}/></Anchor>
                </DisplayFlexDiv>
    )
}

export default BrandsBannerDiv
