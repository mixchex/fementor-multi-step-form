import styled from 'styled-components';
import bp from './bp.styled';

export const Panel = styled.div`
    width:100%;
    max-width: 940px;
    padding:0 calc(var(--unit)*4);
    margin:0 auto;
    display: flex;
    flex-direction:column;

    @media ${bp.md} {
        height:600px;
        border-radius: calc(var(--unit)*4);
        padding: calc(var(--unit)*4);
        background-color: var(--white);
        flex-direction: row;
        box-shadow:0px 8px 24px 24px hsla(213, 96%, 18%, 0.05);
    }   
`