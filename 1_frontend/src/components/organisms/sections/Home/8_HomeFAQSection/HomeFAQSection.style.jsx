import styled from 'styled-components';

export const StyledFAQSection = styled.section`
  margin: 0;
  padding: 128px 0px 128px 0px;
  background-color: ${(props) =>
    props.color ? `var(--${props.color})` : 'var(--gray)'};

  display: flex;
  justify-content: center;
  align-items: center;

  max-width: 1920px;
  min-width: 1320px;

`;
