import React from 'react';
import { StyledIntro } from './styled/Intro.styled';

interface Props {
    title: string,
    description: string,
    icon?: string,
    center?: boolean
}
const Intro = ({
    title,
    description,
    icon,
    center = false
}: Props) => {
    return (
        <StyledIntro className={center && 'center'}>
            <h1 className="title">{title}</h1>
            <p dangerouslySetInnerHTML={{__html: description}}></p>
        </StyledIntro>
    )
}
export default Intro;