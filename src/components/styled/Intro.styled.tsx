import styled from 'styled-components';
import bp from './bp.styled';

export const StyledIntro = styled.div`
    width:100%;
    &:not(:first-child) {
        margin-top:1rem;
    }
    &.center {
        flex-direction:column;
        align-items:center;
        text-align:center;
    }
    & .title {
        color:var(--marine-blue);
        font-weight:700;
        line-height:1.2;
    }
    & a {
        color: var(--cool-gray);
        text-decoration:none;
        &:hover {
            color: var(--purplish-blue);
            text-decoration:underline;
        }
    }

    @media ${bp.md} {
        
        margin-bottom:2rem;

        & .title {
            font-size:2rem;
            margin: 0.8rem 0 -0.5rem;
        }

    }
`