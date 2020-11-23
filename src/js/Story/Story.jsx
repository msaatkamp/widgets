import React, { useState, useEffect } from "react"
import styled from "styled-components"
import Body from "../shared/components/Body"

import Loading from "../shared/components/Loading"
import insightsDetails from "../../../server/getInsightDetails"

import BusinessSVG from './images/account-selector-business.svg'
import CardSVG from './images/account-selector-card.svg'
import PrivateSVG from './images/account-selector-private.svg'

import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Pagination} from 'swiper'

SwiperCore.use([Pagination])

const getSvgObject = (name) => {
    switch(name) {
        case "card": 
            return CardSVG
        case "business":
            return BusinessSVG
        case "private":
            return PrivateSVG
        default:
            return PrivateSVG
    }
}

const StoryWidget = ({storyId}) => {
    const [insightDetails, setInsightDetails] = useState(undefined)
    const [loading, setLoading] = useState(true)
    
    const [selectedAccount, setSelectedAccount] = useState(undefined)
    const [accounts, setAccounts] = useState([])
	
	useEffect(() => {
        if(storyId) {
            fetch(`http://localhost:5000/getinsightdetails/${storyId}`).then(res => {
                if(res.status == 200) return res.json()
            }).then((data) => {
                setInsightDetails(data)

                const accounts = data.blocks.find(e=> e.type == "accountSelector").accounts
                setSelectedAccount(accounts[0].id)
                setAccounts(accounts)
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
                        <AccountSelector slidesPerView={1} pagination onSlideChange={(e) => setSelectedAccount(accounts[e.activeIndex].id)}>
                            {accounts.map(acc => {
                                    return <SwiperSlide key={acc.id}>
                                        <StyledCard onClick={() => setSelectedAccount(acc.id)}>
                                            <div>
                                                <div>
                                                    <img src={getSvgObject(acc.image)} />
                                                    <span>
                                                        {acc.type} ACCOUNT
                                                    </span>
                                                </div>
                                                <p>Total cashflow: ${acc.totalPurchases}</p>
                                            </div>
                                    </StyledCard>
                                </SwiperSlide>
                            })}
                            
                        <span> Current Selected: {selectedAccount}</span>
                        </AccountSelector>	
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
    margin: auto;
    margin-top: 16px;
`

const AccountSelector = styled(Swiper)`
    position:relative;
	margin-top: 24px;
	height: 120px;
	box-shadow: 5px 5px 5px #f3f3f3;
	width: 90%;
	background-color: #FFF;
    max-width: 90%;

    .swiper-pagination-bullet {
        background-color: black;
    }
`

const StyledCard = styled.div`
    margin: 0px auto;
	display: flex;
	flex-direction: column;
    padding: 16px 24px;
    text-transform: uppercase;

    > div {
        display: flex;
        flex-direction: column;
        margin: auto;

        > div {
            > img {
            width: 30px;
            height: 30px;
            margin-right: 12px;
        }
            > span {
                font-size: 10px;
                color: #b3b1bd;
                vertical-align: top;
            }
        }
        > p {
            font-size: 12px;
            font-weight: bold;
        }
    }
`