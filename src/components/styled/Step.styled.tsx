import styled from 'styled-components'

export const StyledStep = styled.div`
    display:flex;
    flex-direction:row;

    & .circle {
        
    }
    & .text {
        display:none;
    }
    & .title {
        
    }
    & .subtitle {
        text-transform:uppercase;
    }

    @media screen and (min-width:var(--bp-md)) {
        & .text {
            display:block;
        }
    }
`

export const StyledStepCircle = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    width:calc(var(--unit)*8);
    height:calc(var(--unit)*8);
    border-radius:calc(var(--unit)*4);
    border:1px solid var(--light-gray);
    color:var(--white);


    &.current {
        background-color:var(--light-gray);
        color:var(--marine-blue);
    }
`