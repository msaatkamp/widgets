import React, { useState, useEffect } from "react"
import styled from "styled-components"
import Body from "../shared/components/Body"

import Loading from "../shared/components/Loading"
import insightsDetails from "../../../server/getInsightDetails"

const StoryWidget = ({storyId}) => {
    const [insightDetails, setInsightDetails] = useState(undefined)
    const [loading, setLoading] = useState(true)
	
	useEffect(() => {
        if(storyId) {
            fetch(`http://localhost:5000/getinsightdetails/${storyId}`).then(res => {
                if(res.status == 200) return res.json()
            }).then((data) => {
                setInsightDetails(data)
                setLoading(false)
            })
        }
	}, [storyId])
    
    if(loading) {
        return <Body><Loading/></Body>
    }

	if(insightDetails) {
        return <Body>
                    <Content>
                        <HighlightText>
                        {insightDetails.title}
                        </HighlightText>
                    </Content>
                </Body>
    }

    if(!loading && !insightsDetails) return <Body>
        Failed to load content.
    </Body>
        
}

export default StoryWidget

const Content = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
    margin: auto;
`
const HighlightText = styled.div`
    font-size: 20px;
    font-weight: bold;
    color: #616266;
    height: 180px;
`
