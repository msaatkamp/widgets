import React, { useState, useEffect } from "react"
import Tabs from "../shared/components/Tabs"
import styled from "styled-components"
import Body from "../shared/components/Body"

import { Swiper, SwiperSlide } from 'swiper/react'
import Loading from "../shared/components/Loading"

const formatDate = (data) => {
	const dateObj = new Date(data)
	return dateObj.toLocaleString("en-us", {month: "short", day: "2-digit"})
}

const Inbox = ({selectStory}) => {
	const [insights, setInsights] = useState([])
	const [activeTab, setActiveTab] = useState(1)
    const [loading, setLoading] = useState(true)
	
	useEffect(() => {
		fetch("http://localhost:5000/getInsights").then(res => {
			if(res.status == 200) return res.json()
		}).then((data) => {
			setInsights(data)
			setLoading(false)
		})
	}, [])

	if(loading) {
        return <Body><Loading/></Body>
	}

	return <Body>
				<Tabs active={activeTab} setActive={setActiveTab} insights={insights} />
				<StyledSwiper renderArrowNext={false} renderArrowPrev={false} swipeable={true} >
					{insights && insights.map(e => {
						if(activeTab === 1 && e.status == "read" || activeTab === 2 && e.status == "unread") {
							return <SwiperSlide key={e.insightId} spaceBetween={100} slidesPerView={1}>
								<StyledCard onClick={() => selectStory(e.insightId)}>
									<div>		
										<div>{e.status == "read" ? "• " : ""}{formatDate(e.date)}</div>
										<h3>{e.title}</h3>
										<p>{e.text}</p>
									</div>
								<img src={"./images/"+e.image+".png"}></img>
							</StyledCard>
						</SwiperSlide>
						}
					})}
				</StyledSwiper>				
			</Body>
}
	
export default Inbox

const StyledSwiper = styled(Swiper)`
	margin-top: 24px;
	height: 240px;
	box-shadow: 5px 5px 5px #f3f3f3;
	width: 90%;
	background-color: #FFF;
    max-width: 90%;
`

const StyledCard = styled.div`
    margin: 0px auto;
	display: flex;
	flex-direction: column;
	padding: 16px 0px;

	> div {
		padding: 0px 16px;
		> p:first-letter {
			text-transform: uppercase;
			font-size: 16px;
		}
		div {
			color: #c5c5d0;
			text-transform: uppercase;
			font-size: 14px;
		}
		h3 {
			text-transform: capitalize;
			font-weight: bold;	
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
		}
	}

	img {
		align-self: center;
		max-width: 100%;
	}
`