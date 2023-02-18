import React, { ReactNode } from 'react';
import { StyledToggleLabel } from './styled/ToggleLabel.styled';

interface Props {
    htmlFor: string,
    children: ReactNode,
    ifTrue: boolean
}

const ToggleLabel = ({
    htmlFor,
    children,
    ifTrue=true
}: Props) => {
    return (
        <StyledToggleLabel>
            {ifTrue ?
            <label htmlFor={htmlFor}>
                {children}
            </label> :
            <p>{children}</p>}
        </StyledToggleLabel>
    )
}
export default ToggleLabel;