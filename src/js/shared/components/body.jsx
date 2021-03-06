import React from "react"
import styled from "styled-components"

const Body = (props) => {
    return (
        <StyledBody>
            {props.children}
        </StyledBody>
    )
}

export default Body

const StyledBody = styled.div`
    background-color: #fcfcfc;
    flex-grow: 1;
`