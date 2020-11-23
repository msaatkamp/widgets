import React from "react"
import styled from "styled-components"

const Header = (props) => 
    <StyledHeader background={props.background}>
        <HeaderText font={props.font}>{props.children}</HeaderText>
    </StyledHeader>


const StyledHeader = styled.header`
    height: 24px;
    border-bottom: solid 1px #ccc;
    padding: 2px 24px;
    margin: 4px 0px 0px 0px;
    display: flex;
    flex-grow: 0;
    background-color: ${(props) => props.background ? props.background : "#FFF" }
`

const HeaderText = styled.span`
    font-family: 'Roboto', sans-serif;
    font-weight: 600;
    font-size: 14px;
    text-transform: uppercase;
    vertical-align: middle;
    > span {
        color: ${(props) => props.font ? props.font : "#000" }
    }
`

export default Header