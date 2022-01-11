import styled from 'styled-components';

export const StyledFormSection = styled.section`
  margin: 0;
  padding: 0;
  background-color: ${(props) =>
    props.color ? `var(--${props.color})` : 'var(--gray)'};

  display: flex;
  justify-content: center;
  align-items: center;

  min-width: 1320px;
  max-width: 1920px;
  height: 894px;
`;
