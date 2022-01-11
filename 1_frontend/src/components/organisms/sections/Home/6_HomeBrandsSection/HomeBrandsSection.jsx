import React from 'react'
// Style Import
import {StyledBrandsSection} from './HomeBrandsSection.style'
// Component Imports
import DisplayFlexDiv from '../../../../atoms/divs/display_flex_div/DisplayFlexDiv'
import Heading from '../../../../atoms/text/heading/Heading'
import BrandsBannerDiv from '../../../../molecules/bennerlike_components/brands/BrandsBannerDiv'

const HomeBrandsSection = () => {
    return (
        <StyledBrandsSection>
            <DisplayFlexDiv direction='column' align='center' justify='center' gap='90px'>
                <Heading h3={true}>Brands we Serve</Heading>
                <BrandsBannerDiv/>
                <BrandsBannerDiv/>
            </DisplayFlexDiv>
        </StyledBrandsSection>
    )
}

export default HomeBrandsSection
