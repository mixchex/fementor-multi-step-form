import styled from 'styled-components'
import bp from './bp.styled';

export const StyledStep = styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
    margin:0 calc(var(--unit)*2);
    
    & .circle {
        display:flex;
        justify-content:center;
        align-items:center;
        width:calc(var(--unit)*8);
        height:calc(var(--unit)*8);
        border-radius:calc(var(--unit)*4);
        border:1px solid var(--light-gray);
        color:var(--white);
        font-weight:bold;

        &.current {
            background-color:var(--light-blue);
            border-color:var(--light-blue);
            color:var(--marine-blue);
        }
    }
    & .title {
        font-weight:bold;
    }
    & .subtitle {
        color:var(--light-gray);
        font-size:0.8rem;
    }

    @media ${bp.md} {
        margin:calc(var(--unit)*3) 0;
    }
`

export const StyledStepText = styled.div`
    display:none;
    text-transform:uppercase;
    line-height:1.2rem;
    @media ${bp.md} {
        margin-left:calc(var(--unit)*4);
        display: flex;
        flex-direction:column;
        align-items:start;

    }
`