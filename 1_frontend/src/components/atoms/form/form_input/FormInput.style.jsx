import styled from 'styled-components';

export const StyledInput = styled.input`
  margin-top: 0.7em;
  border: none;
  background-color: ${(props) =>
    props.theme === 'dark'
      ? 'var(--light-gray)'
      : props.theme === 'light'
      ? 'var(--white)'
      : 'var(--white)'};

  width: 624px;
  height: 72px;
  padding: 23px 40px;
  max-width: 624px;
  max-height: 72px;
  font-size: 16px;
  color: ${(props) =>
    props.theme === 'dark'
      ? 'var(--black)'
      : props.theme === 'light'
      ? 'var(--gray)'
      : 'var(--gray)'}; ;
`;
