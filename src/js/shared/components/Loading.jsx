import React from 'react'
import styled from 'styled-components'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

const Loading = () => {
    return <StyledOverlay>
        <FontAwesomeIcon icon={faSpinner} spin />
    </StyledOverlay>
}

export default Loading

const StyledOverlay = styled.div`
    height: 100%;
    display: grid;
    place-items: center;
    background-color: #fbfbfb;
    color: black;
`