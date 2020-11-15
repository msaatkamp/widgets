import React from "react"
import styled from "styled-components"

const Tabs = ({active}) => {
    return (
        <TabsWrapper>
        <StyledTab active={active == 1}>
            <span>All insights</span>
        </StyledTab>
        <StyledTab active={active == 2}>
            <span>Unread insights</span>
        </StyledTab>
    </TabsWrapper>
    )
}


export default Tabs

const StyledTab = styled.div`
    display: flex;
    flex-direction: column;
    border-bottom: ${props => props.active ? `solid 3px #8eb1f7` : `solid 3px #dfe8fd`};;
    flex-grow: 1;
    height: 24px;
    margin-top: 4px;

    span {
        display: flex;
        font-family: 'Arial Black', sans-serif;
        text-transform: uppercase;
        font-size: 10px;
        justify-content: center;
    }
`

const TabsWrapper = styled.div`
    display: flex;
    margin: 0px 24px;
`