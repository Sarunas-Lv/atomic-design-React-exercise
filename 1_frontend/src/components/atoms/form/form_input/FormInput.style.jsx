import styled from 'styled-components';

export const StyledInput = styled.input`
  margin: ${(props) => props.margin};
  border: none;
  background-color: ${(props) =>
    props.theme === 'dark'
      ? 'var(--light-gray)'
      : props.theme === 'light'
      ? 'var(--white)'
      : 'var(--white)'};

  min-width: 544px;
  height: 26px;
  padding: 23px 40px;
  font-size: 16px;
  &::placeholder {
    color: ${(props) =>
      props.theme === 'dark'
        ? 'var(--black)'
        : props.theme === 'light'
        ? 'var(--gray)'
        : 'var(--gray)'};
  }
`;
