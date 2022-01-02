import styled from 'styled-components';

export const StyledB = styled.b`
  cursor: pointer;
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none;
`;

export const StyledDiv = styled.div`
  box-sizing: border-box;
  
  &:active {
    color: var(--red);
  }
`;
