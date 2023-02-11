import styled from 'styled-components';

export const Panel = styled.div`
    width:100%;
    display: flex;
    flex-direction:column;

    @media screen and (min-width: 768px) {
        border-radius: calc(var(--unit)*4);
        padding: calc(var(--unit)*4);
        background-color: var(--white);
        flex-direction: row;
    }   
`