import styled from 'styled-components';

export const StyledSubmit = styled.input`
  margin: ${(props) => props.margin};
  padding-top: 16px;
  padding-bottom: 16px;
  padding-left: 40px;
  padding-right: 40px;
  color: var(--white);
  background-color: var(--red);
  border: none;
  border-radius: 12px;
  &:hover {
    opacity: 0.81;
    cursor: pointer;
  }
  &:active {
    background-color: var(--blue);
    color: var(--red);
  }
`;
