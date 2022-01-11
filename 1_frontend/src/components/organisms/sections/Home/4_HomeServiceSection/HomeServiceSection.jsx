import React, {useState, useEffect} from 'react'
// Style Imports
import {StyledServiceSection,  StyledTextAlignCenter} from './HomeServicesection.style'
// Component Imports
import LearnMoreDive from '../../../../atoms/divs/learn_more_div/LearnMoreDiv'
import Heading from '../../../../atoms/text/heading/Heading'
import Title from '../../../../atoms/text/title/Title'
import DisplayFlexDiv from '../../../../atoms/divs/display_flex_div/DisplayFlexDiv'
import ServiceDiv from '../../../../molecules/divs/service_div/ServiceDiv'
// All used React icons go bellow

    // Mechanic
    import {  MdOutlineElectricCar , MdOutlineDirectionsCarFilled} from 'react-icons/md';
    import {
      GiGears,
    GiCarWheel,
      GiCarBattery,
      GiGearHammer,
    } from 'react-icons/gi';
    import {  RiOilFill } from 'react-icons/ri';
    import {BsShieldFillCheck} from 'react-icons/bs'


const HomeServiceSection = ({color}) => {
    // Hooks
    // - States
    // -- local
    const [service, setService] = useState('#')
    // Effects
    useEffect(() => {
        console.log('state update');
    }, [])
    return (
        <StyledServiceSection color={color}>
            <DisplayFlexDiv direction='column' gap='8px' width='860px' justify='center' align='center'>
            <Title title02={true}>What we Offer</Title>
            <StyledTextAlignCenter>
                <Heading h2={true}>We offer full service auto repair & maintenance</Heading>
            </StyledTextAlignCenter>
            </DisplayFlexDiv>
            <DisplayFlexDiv direction='column' gap='32px'>
            <DisplayFlexDiv width='1288px' height='472px' wrap='wrap' gap='8px'>
                <ServiceDiv logo={(<MdOutlineElectricCar/>)}  url='https://react-icons.github.io/react-icons/search?q=diagnostic' text='Diagnostics' stateUpdater={{primaryState:service, changeState:setService}}/>
                <ServiceDiv logo={(<GiGears/>)}  url='https://react-icons.github.io/react-icons/search?q=engine' text='Engine Repair' stateUpdater={{primaryState:service, changeState:setService}}/>
                <ServiceDiv logo={(<GiCarWheel/>)}  url='https://react-icons.github.io/react-icons/search?q=wheel' text='Wheel Repair' stateUpdater={{primaryState:service, changeState:setService}}/>
                <ServiceDiv logo={(<RiOilFill/>)}  url='https://react-icons.github.io/react-icons/search?q=oil' text='Oil Filter' stateUpdater={{primaryState:service, changeState:setService}}/>
                <ServiceDiv logo={(<MdOutlineDirectionsCarFilled/>)}  url='https://react-icons.github.io/react-icons/search?q=car' text='Body Work' stateUpdater={{primaryState:service, changeState:setService}}/>
                <ServiceDiv logo={(<GiCarBattery/>)}  url='https://react-icons.github.io/react-icons/search?q=battery' text='Batteries' stateUpdater={{primaryState:service, changeState:setService}}/>
                <ServiceDiv logo={(<BsShieldFillCheck/>)}  url='https://react-icons.github.io/react-icons/search?q=shield' text='Insurance Claim' stateUpdater={{primaryState:service, changeState:setService}}/>
                <ServiceDiv logo={(<GiGearHammer/>)}  url='https://react-icons.github.io/react-icons/search?q=service' text='Custom Service' stateUpdater={{primaryState:service, changeState:setService}}/>
            </DisplayFlexDiv>   
            <DisplayFlexDiv width='1288px'  justify='flex-end'>
              <LearnMoreDive text='Learn about services' url={service}/>
            </DisplayFlexDiv>
            </DisplayFlexDiv>
        </StyledServiceSection>
    )
}

export default HomeServiceSection
