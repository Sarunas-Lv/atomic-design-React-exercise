import styled from 'styled-components';

export const StyledButton = styled.div`
  display: inline-block;
  margin: 0;
  width: fit-content;
  padding-top: 16px;
  padding-bottom: 16px;
  padding-left: 40px;
  padding-right: 40px;
  color: var(--white);
  background-color: ${(props) => `var(--${props.color})`};
  border-radius: 12px;
  &:hover {
    opacity: 0.81;
    cursor: pointer;
  }
  &:active {
    background-color: var(--blue);
    color: var(--red);
  }
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none;
`;
