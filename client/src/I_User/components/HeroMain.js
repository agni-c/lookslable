import React from "react";
import { useState } from "react";
import { Tabs, Tab } from "react-bootstrap";
import CardGallery from "./CardGallery";
import "./styles.css";
import Forms from "./Form/Forms";
export default function HeroMain() {
	const [key, setKey] = useState("popular");
	return (
		<div>
			<Tabs
				id='controlled-tab-example'
				activeKey={key}
				onSelect={(k) => setKey(k)}>
				<Tab eventKey='popular' title='Popular'>
					<CardGallery title='Gallery 1' name='Bill' className='margin-bt' />
				</Tab>
				<Tab eventKey='myLocation' title='My Location'>
					<Forms />
				</Tab>
			</Tabs>
			{console.log("main", key)}
		</div>
	);
}
