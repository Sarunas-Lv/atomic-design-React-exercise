import styled from 'styled-components';

export const StyledSection = styled.section`
  margin: 0;
  padding: 128px 0px 128px 0px;
  background-color: ${(props) =>
    props.color ? `var(--${props.color})` : 'var(--white)'};
  display: flex;
  justify-content: center;
  align-items: center;
`;
