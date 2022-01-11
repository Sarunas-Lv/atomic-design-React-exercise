import styled from 'styled-components';

export const StyledFAQDiv =  styled.div`
margin: 0 auto;
padding:38px 41px 38px 41px;
background-color: var(--white);
min-width: 895px;
max-width: 896px;
display: flex;
flex-direction: column;
gap: 16px;
`
export const StyledHiddenDiv = styled.div`
display:${props=>props.visability?'inline-block':'none'};
width:702px;`

export const StyledButtonDiv = styled.div`
  display: inline-block;

  width: 51px;
  height: 48px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: var(--red);
  color: var(--white);

  cursor: pointer;
`


