import styled from 'styled-components';

export const StyledCaption = styled.caption`
  font-family: 'Manrope', sans-serif;
  margin: 0;
  padding: 0;
  font-size: 16px;
  font-weight: bolder;
  color: ${(props) => `var(--${props.color})`};
`;
