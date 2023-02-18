import styled from 'styled-components'
import bp from './bp.styled';

export const StyledSidebar = styled.aside`
    background-color: var(--purplish-blue);
    background-image:url('./images/bg-sidebar-mobile.svg');
    background-repeat:no-repeat;
    background-position:center center;
    background-size:cover;
    padding:calc(var(--unit)*8) calc(var(--unit)*8) calc(var(--unit)*26);
    margin:0 -1rem;
    display:flex;
    flex-direction:row;
    justify-content:center;
    color:var(--white);
    
    @media ${bp.md} {
        background-image:url('./images/bg-sidebar-desktop.svg');
        flex-direction:column;
        justify-content:flex-start;
        padding:calc(var(--unit)*8) calc(var(--unit)*8);
        border-radius:calc(var(--unit)*2);
        margin:0;
        max-width:272px;
        width:100%;
    }
`