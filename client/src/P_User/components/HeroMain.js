import React, { Component } from "react";
import "./main.css";
import AppForm from "./Form/App";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import firebase from "firebase";
import Location from "../../components/Location";
import ToollTip from "../../components/ToolTip";
import {
	Tab,
	Tabs,
	eventKey,
	Sonnet,
	Accordion,
	Card,
	Button,
	Nav,
	Row,
	Col,
	Container,
	bg,
	Toast,
	Jumbotron,
	Alert,
	Tooltip,
} from "react-bootstrap";

class HeroMain extends Component {
	componentDidMount() {
		firebase.auth().onAuthStateChanged(async function (user) {
			if (user) {
				const profile = {
					name: user.displayName,
					email: user.email,
					photoURL: user.photoURL,
					uid: user.uid,
					tags: [],
				};
				const options = {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
						Accept: "application/json",
					},
					body: JSON.stringify(profile),
				};

				try {
					await fetch(
						"http://localhost:5000/spring-internship/us-central1/app/api/profile",
						options
					);
				} catch (error) {
					console.log(error);
				}
				// console.log(res);
			}
		});
	}

	render() {
		return (
			<Router>
				<Container md='auto' className='center'>
					<h1>Welcome Photographer!</h1>
				</Container>
				<Tab.Container id='left-tabs-example' defaultActiveKey='first'>
					<Row>
						<Col sm={3}>
							<Nav variant='pills' className='flex-column'>
								<Nav.Item>
									<Nav.Link eventKey='first'>Location</Nav.Link>
								</Nav.Item>
								<Nav.Item>
									<Nav.Link eventKey='second'>My bookings</Nav.Link>
								</Nav.Item>
								<Nav.Item>
									<Nav.Link eventKey='third'>Upload Image</Nav.Link>
								</Nav.Item>
								<Nav.Item>
									<Nav.Link eventKey='fourth'>Support</Nav.Link>
								</Nav.Item>
							</Nav>
						</Col>

						<Col sm={9} className='back'>
							<Tab.Content>
								<Tab.Pane eventKey='first'>
									{/* <Button variant="outline-dark">Add</Button> */}
									{/* <LocationPop /> */}
									{/* <Location /> */}
									<ToollTip />
								</Tab.Pane>
								<br />
								<Tab.Pane eventKey='first'>
									{" "}
									<Button variant='outline-dark'>Submit Location Images</Button>
								</Tab.Pane>
								<br />

								<Tab.Pane eventKey='first'>
									<a href='https://spring-internship.web.app/'>
										{" "}
										<Button variant='outline-dark'>Edit Location</Button>
									</a>
								</Tab.Pane>
								<Tab.Pane eventKey='second'>
									<p>Lorem</p>
								</Tab.Pane>
								<Tab.Pane eventKey='third'>
									<AppForm />
								</Tab.Pane>
								<Tab.Pane eventKey='fourth'>
									{/* <WebCam /> */}
									<p>Contact Us </p>
									<Button variant='outline-primary'>Call</Button>
								</Tab.Pane>
							</Tab.Content>
						</Col>
					</Row>
				</Tab.Container>
			</Router>
		);
	}
}

export default HeroMain;
