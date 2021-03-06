import styled from 'styled-components';

export const StyledHomeGetInTouchBanner = styled.section`
  margin: 0;
  padding: 0;
  background-color: ${(props) =>
    props.color ? `var(--${props.color})` : 'var(--white)'};

  display: flex;
  flex-direction: column;
  
  min-width: 1320px;
  max-width: 1920px;
`;
