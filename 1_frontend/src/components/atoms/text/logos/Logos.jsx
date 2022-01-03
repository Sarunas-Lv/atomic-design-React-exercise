// All used React icons go bellow
//Socials
import {
  BsFacebook,
  BsTwitter,
  BsLinkedin,
  BsInstagram,
  BsStarFill,
  BsStarHalf,
  BsFillTelephoneFill,
  BsShieldFillCheck,
} from 'react-icons/bs';
// Mechanic
import { MdEngineering, MdOutlineElectricCar } from 'react-icons/md';
import {
  GiGears,
  GiCarBattery,
  GiSnowflake2,
  GiGearHammer,
} from 'react-icons/gi';
import { RiCarWashingFill, RiOilFill } from 'react-icons/ri';
// Other
import {
  AiFillDollarCircle,
  AiOutlineCheck,
  AiOutlineArrowRight,
  AiOutlineArrowLeft,
  AiOutlineClockCircle,
} from 'react-icons/ai';
// Brands
import {
  IoLogoDribbble,
  IoLogoDropbox,
  IoLogoIonic,
  IoLogoBitbucket,
} from 'react-icons/io';
//---------------------------------------------------------//
// Other Imports
import React from 'react';
import { StyledLogos } from './Logos.style';

const Logos = ({ children, size, color, spacing }) => {
  return (
    <StyledLogos size={size} color={color} spacing={spacing}>
      {children}
    </StyledLogos>
  );
};

export default Logos;
