import React, { Component } from "react";
import "./main.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import firebase from "firebase";
import Gallery from "../../components/Gallery/Gallery";
import ToollTip from "../../components/ToolTip/ToolTip";
import Tooltipform from "../../components/ToolTip/ToolTipForm";
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
          //REVIEW  PROFILE LINK
          await fetch(
            `${process.env.REACT_APP_DEVELOPMENT}/api/profile`,
            options
          );
          await fetch(
            `${process.env.REACT_APP_DEVELOPMENT}/api/upload/uid`,
            options
          );
          console.log(process.env.REACT_APP_DEVELOPMENT);
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
        <Container md="auto" className="center">
          <h1>Welcome Photographer!</h1>
        </Container>
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
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
                  <Nav.Link eventKey="third">Uploaded Images</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fourth">Support</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>

            <Col sm={9} className="back">
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  {/* <Button variant="outline-dark">Add</Button> */}
                  {/* <LocationPop /> */}
                  {/* <Location /> */}
                  <ToollTip />
                </Tab.Pane>
                <br />
                <Tab.Pane eventKey="first">
                  {" "}
                  <Tooltipform />
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
                  <Gallery />
                </Tab.Pane>
                <Tab.Pane eventKey="fourth">
                  {/* <WebCam /> */}
                  <p>Contact Us </p>
                  <Button variant="outline-primary">Call</Button>
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
