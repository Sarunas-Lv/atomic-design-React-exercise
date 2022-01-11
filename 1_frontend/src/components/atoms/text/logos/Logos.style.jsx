import styled from 'styled-components';

export const StyledLogos = styled.span`
  height: fit-content;
  font-size: ${(props) => props.size};
  color: ${(props) => `var(--${props.color})`};
  letter-spacing: ${(props) => props.spacing};
  position: relative;
  top:5%;
`;
