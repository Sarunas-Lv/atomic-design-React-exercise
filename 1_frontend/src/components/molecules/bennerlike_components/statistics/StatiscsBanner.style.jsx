import styled from 'styled-components';

export const StyledHomeGetInTouchBanner = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 1320px;
  max-width: 1920px;
  height: 210px;
  background-color: ${props=>props.color?props.color:'var(--gray)'};
`;
