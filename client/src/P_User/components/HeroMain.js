import React, { Component } from "react";
import "./main.css";
import AppForm from "./Form/App";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
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
} from "react-bootstrap";
class HeroMain extends Component {
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
                  <Nav.Link eventKey="third">Upload Image</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fourth">Support</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>

            <Col sm={9} className="back">
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <a href="https://spring-internship.web.app/">
                    <Button variant="outline-dark">Add Location</Button>
                  </a>
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
                <Tab.Pane eventKey="fourth">
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