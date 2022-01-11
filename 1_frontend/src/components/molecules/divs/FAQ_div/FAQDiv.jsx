import React, {useState} from 'react'
// Style Imports
import {StyledFAQDiv,StyledHiddenDiv, StyledButtonDiv} from './FAQDiv.style'
// Component Imports
import Title from '../../../atoms/text/title/Title'
import DisplayFlexDiv from '../../../atoms/divs/display_flex_div/DisplayFlexDiv'
import Paragraph from '../../../atoms/text/paragraph/Paragraph'
// react-icons Imports
import {HiMinus, HiPlus} from 'react-icons/hi'
const FAQDiv = ({question, anwser}) => {
// Hooks
// - State
// -- local
const [active, setActive] = useState(false)

    return (
        <StyledFAQDiv>
            <DisplayFlexDiv width='100%' align='center' justify='space-between'>
                <Title>{question}</Title>
                {active?(<StyledButtonDiv onClick={()=>setActive(false)}><HiMinus/></StyledButtonDiv>):(<StyledButtonDiv onClick={()=>setActive(true)}><HiPlus/></StyledButtonDiv>)}
            </DisplayFlexDiv>
            <StyledHiddenDiv visability={active}>
                <Paragraph p1={true} color='dark-gray'>{anwser}</Paragraph>
            </StyledHiddenDiv>
        </StyledFAQDiv>
    )
}

export default FAQDiv
