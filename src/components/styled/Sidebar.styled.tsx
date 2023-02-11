import styled from 'styled-components'

export const StyledSidebar = styled.div`
    
    background-color: var(--purplish-blue);
    padding:calc(var(--unit)*8) calc(var(--unit)*8);
    display:flex;
    flex-direction:row;
    @media screen and (min-width: 768px) {
        flex-direction:column;
        padding:calc(var(--unit)*10) calc(var(--unit)*8);
        border-radius:calc(var(--unit)*2);
        max-width:272px;
        width:100%;
    }
`