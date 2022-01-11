// Style Imports
import {StyledFAQSection} from './HomeFAQSection.style'
// Component Imports
import DisplayFlexDiv from '../../../../atoms/divs/display_flex_div/DisplayFlexDiv'
import Heading from '../../../../atoms/text/heading/Heading'
import FAQDiv from '../../../../molecules/divs/FAQ_div/FAQDiv'

const HomeFAQSection = ({colors}) => {
    return (
        <StyledFAQSection colors={colors}>
            <DisplayFlexDiv just='center' align='center' direction='column' gap='92px'>
                <Heading h3={true}>Frequently Asked Questions</Heading>
                <DisplayFlexDiv just='center' align='center' direction='column' gap='12px' >
                    <FAQDiv question='How long should a car repair take?' anwser='I have got my car repaired at Finsweet many times before, they are good at what they do. Not only did they repair my car I have got my car repaired at Finsweet I have got my car repaired at Finsweet'/>
                    <FAQDiv question="How do I schedule my car's appointment ?" anwser='I have got my car scheduled at Finsweet many times before, they are good at what they do. Not only did they schedule my car I have got my car scheduled at Finsweet I have got my car scheduled at Finsweet'/>
                    <FAQDiv question='What are the repair services provided?' anwser='I have got my car repaired at Finsweet many times before, they are good at what they do. Not only did they repair my car I have got my car repaired at Finsweet I have got my car repaired at Finsweet'/>
                    <FAQDiv question='How do I find auto body shops near me?' anwser='I have got my car repaired at Finsweet many times before, they are good at what they do. Not only did they repair my car I have got my car repaired at Finsweet I have got my car repaired at Finsweet'/>
                    <FAQDiv question='Genuine spare parts during car repair?' anwser='Yeah'/>
                </DisplayFlexDiv>
            </DisplayFlexDiv>
        </StyledFAQSection>
    )
}

export default HomeFAQSection
