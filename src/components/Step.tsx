import React from 'react';
import { StyledStep, StyledStepText } from './styled/Step.styled';

interface StepProps {
    step: number,
    current: number,
    title: string,
    end?: boolean
}
const Step = ({
    step,
    current,
    title,
    end = false
}: StepProps) => {
    return (
        <StyledStep>
            <div className={`circle ${((current === step) || (current > step && end)) ? 'current': ''}`}>
                {step}
            </div>
            <StyledStepText>
                <div className="subtitle">Step {step}</div>
                <div className="title">{title}</div>
            </StyledStepText>
        </StyledStep>
    )
}
export default Step;

