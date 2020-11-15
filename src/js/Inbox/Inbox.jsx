import React from "react"
import Header from "../shared/components/header.jsx"
import Tabs from "../shared/components/tabs.jsx"
import styled from "styled-components"
import Body from "../shared/components/body.jsx"

const Inbox = () => {
	return (
	<Container>
		<Header>
			INBOX
		</Header>
		<Body>
			<Tabs active="1" />
		</Body>
	</Container>)
}
	
export default Inbox

const Container = styled.div`
	width: 100%;
`