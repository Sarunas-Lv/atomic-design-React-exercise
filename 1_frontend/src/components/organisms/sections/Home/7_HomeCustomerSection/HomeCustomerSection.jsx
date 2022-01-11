import React from 'react'
// Style Imporrts
import {StyledCSSection, StyledTextAlign} from './HomeCustomerSectionStyle'
// Component Imports
import Heading from '../../../../atoms/text/heading/Heading'
import Img from '../../../../atoms/divs/image_div/ImgDiv'
import DisplayFlexDiv from '../../../../atoms/divs/display_flex_div/DisplayFlexDiv'
import TEMPORARY from '../../../../../assets/images/home_services/DELETE_LATER.jpg'
// react-icon Imports
const HomeCustomerSection = () => {
    return (
        <StyledCSSection>
            <DisplayFlexDiv width='909px' height='134px' justify='center' align='center'>
                <StyledTextAlign>
                <Heading h3={true}>Our customers say the nicest things about our service</Heading>
                </StyledTextAlign>
            </DisplayFlexDiv>
            <Img width='1226px' height='436px' bgs='cover' url={TEMPORARY}></Img>
        </StyledCSSection>
    )
}

export default HomeCustomerSection
