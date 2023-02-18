import React, { ReactNode } from 'react';
import { StyledSection } from './styled/Section.styled';

interface Props {
    step: number,
    current: number,
    children: ReactNode
}

const Section = ({
    step,
    current,
    children
}: Props) => {
    return (step === current ? <StyledSection>{ children }</StyledSection>: null);
}
export default Section;