import styled from 'styled-components';

export const StyledLogos = styled.span`
  font-size: ${(props) => props.size};
  color: ${(props) => `var(--${props.color})`};
`;
