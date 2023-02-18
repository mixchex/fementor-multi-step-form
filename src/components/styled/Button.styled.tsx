import styled from 'styled-components';
import bp from './bp.styled';

export const StyledButton = styled.button`
    height: 40px;
    padding:0;
    font-size:1rem;
    font-family: 'Ubuntu', sans-serif;
    font-weight:500;
    border-radius:8px;
    color: var(--cool-gray);
    border:none;
    background-color:transparent;
    &:hover,
    &:focus {
        color:var(--marine-blue);
        cursor:pointer;
    }

    &.primary {
        padding:0 16px;
        background-color:var(--marine-blue);
        color:var(--white);
        &:hover {
            background-color:var(--marine-blue-lighter);
        }
    }
    @media ${bp.md} {
        height:48px;
        
        &.primary {
            padding:0 24px;
        }
    }
`