import styled from 'styled-components';

export const StyledServiceCard = styled.div`
margin: 0 auto;
height: ${props=>props.height?props.height:'232px;'};
width: ${props=>props.width?props.width:'316px;'};


background-color: ${props=>props.active?'var(--red)':'var(--white)'};
color: ${props=>props.active?'var(--white)':'var(--black)'};

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