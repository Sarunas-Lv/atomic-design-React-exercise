import React, {useState, useEffect} from 'react'
// Style Imports
import {StyledServiceCard} from './ServiceDiv.style'
// Component Imports
import Title from '../../../atoms/text/title/Title';
import Logos from '../../../atoms/text/logos/Logos';
const ServiceDiv = ({stateUpdater, url, logo, text, width, height}) => {
    // Hooks
    // - States
    // -- local
    const [isActive, setIsActive] = useState(false)

    // - State Import
    const { primaryState, changeState } = stateUpdater;

    // Effects
    useEffect(() => {
        if(primaryState===url){
            setIsActive(true)
        } else {
            setIsActive(false)
        }
    }, [primaryState, url])
    return (
        <StyledServiceCard onClick={()=>{changeState(url)} } active={isActive} width={width} height={height}>
            <Logos size='44px'>{logo}</Logos>
            <Title title02={true}>{text}</Title>
        </StyledServiceCard>
    )
}

export default ServiceDiv
