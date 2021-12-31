import styled from 'styled-components';

export const StyledHeading = styled.h1`
  font-family: 'Manrope', sans-serif;
  margin: 0;
  padding: 0;
  font-size: ${(props) =>
    props.h1
      ? '64px'
      : props.h2
      ? '58px'
      : props.h3
      ? '48px'
      : props.h4
      ? '40px'
      : props.h5
      ? '32px'
      : props.h6
      ? '20px'
      : '64px'};
  font-weight: bolder;
  color: ${(props) => `var(--${props.color})`}
`;
