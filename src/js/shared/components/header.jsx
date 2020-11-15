import React from "react"
import styled from "styled-components"

const Header = (props) => 
    <StyledHeader>
        <HeaderText>{props.children}</HeaderText>
    </StyledHeader>


const StyledHeader = styled.header`
    height: 24px;
    border-bottom: solid 1px #ccc;
    padding: 2px 24px;
    margin: 4px 0px 0px 0px;
`

const HeaderText = styled.span`
    font-family: 'Arial Black', sans-serif;
    font-size: 14px;
    text-transform: uppercase;
    vertical-align: middle;
`

export default Header