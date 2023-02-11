import React from 'react';
import { StyledStep, StyledStepCircle } from './styled/Step.styled';

interface Props {
    step: number,
    current?: number,
    title: string
}
const Step = ({
    step,
    current,
    title
}: Props) => {
    return (
        <StyledStep>
            <StyledStepCircle className={`circle${current === step} ? ' current' :''`}>
                {step}
            </StyledStepCircle>
            <div className="text">
                <div className="subtitle">Step {step}</div>
                <div className="title">{title}</div>
            </div>
        </StyledStep>
    )
}
export default Step;