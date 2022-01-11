import styled from 'styled-components';

export const StyledCSSection = styled.section`
  margin: 0;
  padding: 128px 0px 128px 0px;
  background-color: ${(props) =>
    props.color ? `var(--${props.color})` : 'var(--light-gray)'};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 94px;

  max-width: 1920px;
  min-width: 1320px;

`;

export const StyledTextAlign =styled.div`
margin:0 auto;
padding:0;

height:100%;
width:100%;

text-align: center;
`