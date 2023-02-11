import React from "react";
import { StyledSidebar } from "./styled/Sidebar.styled";
import Step from "./Step";

interface Props {
    current?: number
}

const Sidebar = ({
    current
}: Props) => {

    return (
        <StyledSidebar>
            <Step
                current={current}
                step={1}
                title="Your info"
            />
            
            

            Step 2
            Select plan

            Step 3
            Add-ons

            Step 4
            Summary
        </StyledSidebar>
    )
}

export default Sidebar;