import styled from 'styled-components';

export const StyledUl = styled.ul`
  padding: ${(props) => props.padding};
  margin: 0;

  text-decoration: none;
  list-style: none;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${(props) => props.gap};

  
`;
