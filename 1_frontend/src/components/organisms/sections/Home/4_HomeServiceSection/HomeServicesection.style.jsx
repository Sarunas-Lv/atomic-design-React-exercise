import styled from 'styled-components';

export const StyledServiceSection = styled.section`
margin:0;
padding:128px 0px 130px 0px;
background-color: ${props=>props.color?props.color:'var(--light-gray)'};

min-width: 1320px;
max-width: 1920px;

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 64px;
`

export const StyledDivCard = styled.div`
margin: 0 auto;
height: 232px;
width: 316px;

background-color: ${(props) => `var(--${props.color})`};

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 16px;

cursor: pointer;

-webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
     -khtml-user-select: none; /* Konqueror HTML */
       -moz-user-select: none; /* Old versions of Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */

&:active{
    color: var(--white);
    background-color: var(--red);
}
`

export const StyledTextAlignCenter = styled.div`
margin: 0 auto;
padding: 0;
text-align:center`