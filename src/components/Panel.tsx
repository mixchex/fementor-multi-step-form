import React, { forwardRef, ReactNode, RefObject } from 'react';
import { StyledPanel } from './styled/Panel.styled';

interface Props {
    children: ReactNode
}

const Panel = ({
    children,
}: Props) => {
    
    return <StyledPanel className="panel">
        {children}
    </StyledPanel>
}
export default Panel;