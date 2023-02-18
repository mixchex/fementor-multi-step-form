import styled from 'styled-components';
import bp from './bp.styled';

export const StyledForm = styled.main`
    padding:24px 24px;
    width:100%;
    max-width: 448px; 
    margin:-4.5rem auto 0;
    background-color: var(--white);
    border-radius:0.5rem;
    box-shadow:0px 8px 24px 24px hsla(213, 96%, 18%, 0.1);
    & .blue {
        color:var(--marine-blue);
    }
    & section {
        width:100%;
        height:100%;
        display:flex;
        justify-content:center;
    }
    & form {
        width: 100%;
        height:100%;
        
    }
    & footer {
        display:flex;
        flex-direction:row;
        justify-content: space-between;
    }
    & .flex {
        width:100%;
        display:flex;
        flex-direction:row;
    }
    & .flex-col {
        width:100%;
        display:flex;
        flex-direction:column;
        & > & {
            width: auto;
            align-content:stretch;
        }
    }
    & .h-full {
        height:100%;
    }
    & .items-start {
        align-items:flex-start;
    }
    & .items-center {
        align-items:center;
    }
    & .justify-center {
        justify-content:center;
    }
    & .justify-between {
        justify-content:space-between;
    }

    & .addon {
        font-size:0.9rem;
        &:not(:last-child) {
            margin-bottom:0.75rem;
        }
    }

    & .group {
        border-radius:0.5rem;
        background-color: var(--alabaster);
        padding:1rem;
        margin-bottom:1rem;
    }

    & .padded {
        padding:1rem;
    }

    .plan-term {
        display:flex;
        justify-content:center;
        align-items:center;
        margin-top:2rem;
        
    }
    .link {
        border:none;
        background:transparent;
        text-decoration:underline;
        padding:0;
        color:var(--cool-gray);
        transition:0.1s ease-in-out;
        &:hover {
            text-decoration:none;
            color:var(--purplish-blue);
        }
    }

    & .title {
        margin:0;
        color: var(--marine-blue);
        font-weight: 700;
    }
    & .subtitle {
        font-size:14px;
    }
    & .highlight {
        font-size:1.2rem;
        font-weight:700;
        color: var(--purplish-blue);
    }

    & .form-footer {
        background-color:var(--white);
        padding:1rem;
        position:fixed;
        bottom:0;
        left:0;
        right:0;
        z-index: 20;
    }
    @media ${bp.md} {
        background-color:var(--white);
        box-shadow:none;
        margin:0 auto;

        & form {
            display:flex;
            flex-direction:column;
            justify-content:space-between;
        }
        & .form-footer {
            position:relative;
            left:auto;
            right:auto;
            bottom:auto;
            padding:0;
        }
        & .flex-md {
            width:100%;
            display:flex;
            flex-direction:row;
        }
        & .space-y-4-md {
            & > * {
                &:not(:last-child) {
                    margin-bottom:1rem;
                }
            }
        }
        & .highlight {
            font-size:1.2rem;
        }
    }
`