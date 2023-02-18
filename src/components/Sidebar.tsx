import React from "react";
import { StyledSidebar } from "./styled/Sidebar.styled";
import Step from "./Step";

interface Props {
    current: number
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
                <Step
                    current={current}
                    step={2}
                    title="Select plan"
                />
                <Step
                    current={current}
                    step={3}
                    title="Add-ons"
                />
                <Step
                    current={current}
                    step={4}
                    end={true}
                    title="Summary"
                />
            </StyledSidebar>
    )
}

export default Sidebar;