import React from "react";
import "./styles.css";
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
import Add from "./Add/Add";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
class Location extends React.Component {
  HomeData = () => {
    return (
      <div>
        <Container md="auto" className="center">
          <h1>Location</h1>
        </Container>
        <Container>
          <Row>
            <Link to="/user/location/add">
              <Col md>
                <Card
                  bg="info"
                  // text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
                  style={{ width: "18rem" }}
                >
                  <Card.Header style={{ color: "white" }}>Add</Card.Header>
                  <Card.Body style={{ color: "white" }}>
                    <Card.Title>Success Card Title </Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Link>
            <Link to="/user/location/submit-location-images">
              <Col md>
                <Card
                  bg="danger"
                  // text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
                  style={{ width: "18rem" }}
                >
                  <Card.Header style={{ color: "white" }}>
                    Submit Location Images
                  </Card.Header>
                  <Card.Body style={{ color: "white" }}>
                    <Card.Title>Success Card Title </Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Link>
            <Link to="/user/location/edit-location">
              <Col md>
                <Card
                  bg="dark"
                  // text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
                  style={{ width: "18rem" }}
                >
                  <Card.Header style={{ color: "white" }}>Header</Card.Header>
                  <Card.Body style={{ color: "white" }}>
                    <Card.Title>Edit Location </Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Link>
          </Row>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </Container>
      </div>
    );
  };
  render() {
    return (
      <div className="content">
        <BrowserRouter>
          <Switch>
            <Route path="/user/location" exact component={this.HomeData} />
            <Route path="/user/location/add" exact component={Add} />
            {/* <Route
            path="/user/location/submit-location-images"
            exact
            component={MyBookings}
          />
          <Route
            path="/user/location/edit-location"
            exact
            component={Support}
          />
          <Route
            path="/user/uploaded-images"
            exact
            component={UploadedImages}
          /> */}
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
export default Location;
