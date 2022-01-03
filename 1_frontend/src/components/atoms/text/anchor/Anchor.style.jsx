import styled from 'styled-components';

export const StyledAnchor = styled.a`
  text-decoration: none;
  font-family: 'Manrope', sans-serif;
  margin: 0;
  padding: 0;
  font-size: ${(props) => (props.p1 ? '18px' : props.p2 ? '16px' : '18px')};
  font-weight: bolder;
  color: ${(props) => `var(--${props.color})`};

  &:active {
    color: var(--blue);
  }
`;
