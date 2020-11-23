import React, { useState } from 'react'
import styled from 'styled-components'
import Header from './js/shared/components/Header'
import InboxWidget from './js/Inbox/Inbox'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import StoryWidget from './js/Story/Story'

const App = () => {
    const [storyId, setStoryId] = useState("f1c70a2e-9ed9-418b-8d44-d71c38c374ce")
    //useState(undefined)
    const selectStory = (id) => {
        setStoryId(id)
    }
    return <Container>
            {!storyId && 
                <>
                    <Header background={"#FFF"}><span>INBOX</span></Header> 
                    <InboxWidget selectStory={selectStory}></InboxWidget>
                </>}
            {storyId && 
                <>
                <Header background={"#FBFBFB"} font={"#9bb9f6"}> <StyledIcon icon={faArrowLeft} onClick={() => setStoryId(undefined)} /> <span>Spending Analysis</span></Header>
                    <StoryWidget storyId={storyId}/>
                </>
            }
    </Container>
}

export default App

const Container = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;
`

const StyledIcon = styled(FontAwesomeIcon)`
    margin-right: 40px;
`