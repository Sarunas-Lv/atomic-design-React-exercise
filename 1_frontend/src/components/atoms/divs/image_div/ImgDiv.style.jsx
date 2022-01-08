import styled from 'styled-components';

export const StyledImg = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};

  background-image: url(${(props) => props.url});
  background-repeat: no-repeat;

  background-size: ${(props) => (props.bgs ? props.bgs : 'contain')};

  background-position: ${(props) => props.position};

  transition: all .2s ease-in-out;

  &:hover{
    transform: ${props=>props.grow?'scale(1.1)':'none'};
  }
`;
