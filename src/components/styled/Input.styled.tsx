import styled from 'styled-components';
import bp from './bp.styled';

export const StyledInput = styled.div`
    display:flex;
    flex-direction:column;
    margin-bottom:16px;

    & .errorText {
        display:none;
    }
    
    & label {
        font-size:0.9rem;
        color:var(--marine-blue);
        margin-bottom:8px;
    }
    & input {
        border:1px solid var(--light-gray);
        height:40px;
        padding:0 calc(var(--unit)*4);
        border-radius:var(--unit);
        transition:0.2s ease-in-out;
        font-family: 'Ubuntu', sans-serif;
        font-weight:500;

        &::placeholder {
            color:var(--cool-gray);
        }

        &:hover,
        &:focus {
            border-color:var(--purplish-blue);
            outline:none;
        }
        &:invalid {
            border-color:var(--strawberry-red);
        }
    }
    &.error {
        & input {
            border-color:var(--strawberry-red);
            &:hover,
            &:focus {
                border-color:var(--strawberry-red);
            }
        }
        & .errorText {
            color:var(--strawberry-red);
            display:block;
            font-size:0.9rem;
        }
    }
    & header {
        display:flex;
        justify-content:space-between;
    }

    &::placeholder {
        color:var(--cool-gray);
    }

    @media ${bp.md} {
        & input {
            height:48px;
            border-radius:calc(var(--unit)*2);
        }
    }
`;

export const StyledRadio = styled.div`
    width:100%;
    
    & img {
        margin-top: 5px;
    }

    & input {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        white-space: nowrap;
        border-width: 0;
    }
    & label {
        border:1px solid var(--light-gray);
        display:flex;
        border-radius:8px;
        padding:14px;
        transition:0.2s ease-in-out;
        &:hover,
        &:focus {
            background-color:var(--alabaster);
            border-color:var(--purplish-blue);
            outline:none;
            
        }
        &:invalid {
            border-color:var(--strawberry-red);
        }
    }
    & .text {
        display:block;
        margin-left:16px;
        
        & .label {
            font-size:16px;
            color: var(--marine-blue);
            font-weight: 500;
            display:block;
        }
        & .subLabel {
            display:block;
            font-size:14px;
        }
        & .helper {
            display:block;
            font-size:10px;
            color: var(--marine-blue);
        }
    }
    &.checked label {
        background-color:var(--alabaster);
        border-color:var(--purplish-blue);
        outline:none;
    }
    

    @media ${bp.md} {
        width:calc(33.333% - 10.3333px);
        
        margin-right:16px;
        flex-direction:column;

        &:last-child {
            margin-right:0;
        }

        & label {
            height:160px;
            flex-direction:column;
            justify-content: space-between;
        }
        & .text {
            margin-left:0;
        }
    }
`;

export const StyledCheckbox = styled.div`
    & label {
        display:flex;
        align-items:center;
        justify-content:space-between;
        border:1px solid var(--light-gray);
        border-radius:8px;
        padding:14px;
        transition:0.2s ease-in-out;

        &:hover,
        &:focus {
            border-color:var(--purplish-blue);
            outline:none;
        }
        &:invalid {
            border-color:var(--strawberry-red);
        }

        & div {
            display:flex;
            align-items:center;
            justify-content:flex-start;
            position:relative;
            &:before,
            &:after {
                content:'';
                width: 1.25rem;
                height:1.25rem;
                display:block;
                border-radius:4px;
            }
            &:before {
                background-color:var(--white);
                border:1px solid var(--light-gray);
                
            }
            &:after {
                position:absolute;
                left:1px;
                transform:tanslateY(-50%);
            }
        }
        & .text {
            margin-left:1rem;
            display:flex;
            flex-direction:column;
        }
        & .label {
            font-size:16px;
            color: var(--marine-blue);
            font-weight: 500;
            display:block;
        }
        & .subLabel {
            display:block;
            font-size:14px;
        }
        & .helper {
            display:block;
            color: var(--purplish-blue);
        }
        
    }
    &.checked label {
        background-color:var(--alabaster);
        border-color:var(--purplish-blue);
        outline:none;

        & div {
            &:after {
                background:var(--purplish-blue) url(./images/icon-checkmark.svg) no-repeat center;
            }
        }
    }
    & input {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        white-space: nowrap;
        border-width: 0;
    }

    
`

export const StyledToggle = styled.div`
    position:relative;
    
    & label {
        width:38px;
        height:20px;
        display:flex;
        flex-direction:row;
        justify-content:flex-start;
        border-radius:10px;
        background-color:var(--marine-blue);
        & span {
            width:12px;
            height:12px;
            margin:4px;
            transition:0.15s ease-in-out;
            border-radius:8px;
            display:block;
            background-color:var(--white);
        }
    }
    input {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        white-space: nowrap;
        border-width: 0;
    }
    &.checked {
        & span {
            transform:translateX(18px);
        }
    }
`;