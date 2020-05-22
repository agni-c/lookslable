import React, { Component } from "react";
import "./main.css";
import AppForm from "./Form/App";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import firebase from "firebase";
import ToollTip from "../../components/ToolTip";
import Location from "../../routes/Location/Location";
import Support from "../../routes/Support/Support";
import CardMan from "../../components/Card/CardMan";
import UploadedImages from "../../routes/UploadedImages/UploadedImages";
import MyBookings from "../../routes/MyBookings/MyBookings";

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
				console.log(profile);

				try {
					await fetch(
						`http://localhost:5000/spring-internship/us-central1/app/api/profile/${
							firebase.auth().currentUser.uid
						}`,
						options
					);
				} catch (error) {
					console.log(error);
				}
				// console.log(res);
			}
		});
	}
	Homedata = () => {
		return (
			<>
				<Container md='auto' className='center home-container'>
					<h1 className='center-align'>Welcome Photographer!</h1>
					<Row className='row'>
						<Link to='/user/location' style={{ textDecoration: "none" }}>
							<Col className='column'>
								<Card
									bg='info'
									// text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
									style={{ width: "18rem" }}>
									<Card.Header style={{ color: "white" }}>Location</Card.Header>
									<Card.Body style={{ color: "white" }}>
										<Card.Title>Location </Card.Title>
										<Card.Text>Some Text</Card.Text>
									</Card.Body>
								</Card>
							</Col>
						</Link>
						<Link to='user/my-bookings' style={{ textDecoration: "none" }}>
							<Col className='column'>
								<Card
									bg='danger'
									// text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
									style={{ width: "18rem" }}>
									<Card.Header style={{ color: "white" }}>
										My Bookings
									</Card.Header>
									<Card.Body style={{ color: "white" }}>
										<Card.Title>My Bookings </Card.Title>
										<Card.Text>Some Text</Card.Text>
									</Card.Body>
								</Card>
							</Col>
						</Link>
						<Link to='user/uploaded-images' style={{ textDecoration: "none" }}>
							<Col className='column'>
								<Card
									bg='dark'
									// text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
									style={{ width: "18rem" }}>
									<Card.Header style={{ color: "white" }}>
										Drive Link
									</Card.Header>
									<Card.Body style={{ color: "white" }}>
										<Card.Title>History </Card.Title>
										<Card.Text>Some Text</Card.Text>
									</Card.Body>
								</Card>
							</Col>
						</Link>
						<Link to='user/support' style={{ textDecoration: "none" }}>
							<Col className='column'>
								<Card bg='warning' style={{ width: "18rem" }}>
									<Card.Header style={{ color: "white" }}>Support</Card.Header>
									<Card.Body style={{ color: "white" }}>
										<Card.Title>Support</Card.Title>
										<Card.Text>Some Text</Card.Text>
									</Card.Body>
								</Card>
							</Col>
						</Link>
					</Row>
				</Container>
			</>
		);
	};

	render() {
		return (
			<BrowserRouter>
				<Switch>
					<Route path='/' exact component={this.Homedata} />
					<Route path='/user/location' exact component={Location} />
					<Route path='/user/my-bookings' exact component={MyBookings} />
					<Route path='/user/support' exact component={Support} />
					<Route
						path='/user/uploaded-images'
						exact
						component={UploadedImages}
					/>
				</Switch>
			</BrowserRouter>
		);
		// NOTE previous code
		{
			/* <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row>
            <Col sm={3}>
              <Nav variant="pills" className="flex-column">
                <Nav.Item>
                  <Nav.Link eventKey="first">Location</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">My bookings</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Upload Image</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fourth">Support</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col> */
		}
		{
			/* 
            <Col sm={9} className="back">
              <Tab.Content>
                <Tab.Pane eventKey="first"> */
		}
		{
			/* <Button variant="outline-dark">Add</Button> */
		}
		{
			/* <LocationPop /> */
		}
		{
			/* <Location />
                  <ToollTip />
                </Tab.Pane>
                <br />
                <Tab.Pane eventKey="first">
                  {" "}
                  <Button variant="outline-dark">Submit Location Images</Button>
                </Tab.Pane>
                <br />

                <Tab.Pane eventKey="first">
                  <a href="https://spring-internship.web.app/">
                    {" "}
                    <Button variant="outline-dark">Edit Location</Button>
                  </a>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <p>Lorem</p>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <AppForm />
                </Tab.Pane>
                <Tab.Pane eventKey="fourth"> */
		}
		{
			/* <WebCam /> */
		}
		{
			/* <p>Contact Us </p>
                  <Button variant="outline-primary">Call</Button>
                </Tab.Pane> */
		}
		{
			/* </Tab.Content>
            </Col>
          </Row>
        </Tab.Container> */
		}
	}
}

export default HeroMain;
