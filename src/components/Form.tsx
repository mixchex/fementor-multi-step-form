import React, { ReactNode, SyntheticEvent } from 'react';
import { StyledForm } from './styled/Form.styled';

interface Props {
    children: ReactNode,
    onSubmit: SyntheticEvent
}
const Form = ({ 
    onSubmit,
    children
}) => {
    return (
        <StyledForm>
            <section>
                <form onSubmit={onSubmit}>
                    {children}
                </form>
            </section>
        </StyledForm>)
}
export default Form;