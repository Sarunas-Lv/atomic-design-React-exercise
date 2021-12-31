import styled from 'styled-components';

export const StyledTitle = styled.p`
  font-family: 'Manrope', sans-serif;
  margin: 0;
  padding: 0;
  font-size: ${(props) =>
    props.title01 ? '32px' : props.title02 ? '24px' : '32px'};
  font-weight: bolder;
  color: ${(props) => `var(--${props.color})`};
`;
