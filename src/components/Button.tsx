import React, { ReactNode, MouseEvent } from 'react';
import { StyledButton } from './styled/Button.styled';

interface Props {
    type?: string,
    children: ReactNode,
    variant?: string,
    onClick: ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void) | undefined
}

const Button = ({
    type = "button",
    children,
    onClick,
    variant = 'default'
}: Props) => {
    return (
        <StyledButton
            type={type}
            className={variant}
            onClick={onClick}
        >
            { children }
        </StyledButton>
    )
}
export default Button;