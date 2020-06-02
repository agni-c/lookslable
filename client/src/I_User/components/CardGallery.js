import React from "react";
import { Card, Button, Badge, Container, Row, Col } from "react-bootstrap";
import "./styles.css";
import Gallery from "./Gallery";
import PopOver from "./Popover/PopOver";

class CardGallery extends React.Component {
  render() {
    const { name, title } = this.props;
    return (
      <div>
        <Card style={{}} className="margin-bt" className="colApp">
          <Gallery />
          <Card.Body className="colApp">
            <Card.Title>{title}</Card.Title>
            <Card.Text>
              <strong>About Photographer : {name}</strong>
              <br />
              <p>
                lorem lorem lorem lorem
                <br /> lorem
              </p>
            </Card.Text>
            <Container>
              <Row>
                <Col>
                  <br />
                  {/* GPS Location goes here*/}
                  <Badge variant="primary">
                    <div className="icon fa-medium is-left">
                      {/* <i
                        class="fas fa-map-marker"
                        style={{ fontSize: "36px" }}
                      ></i> */}
                      <svg
                        viewBox="0 0 24 24"
                        width="40"
                        height="40"
                        stroke="currentColor"
                        stroke-width="2"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="css-i6dzq1"
                      >
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                      </svg>
                    </div>
                  </Badge>{" "}
                </Col>
                <Col>
                  <Badge variant="primary" style={{ marginLeft: "120px" }}>
                    <PopOver text="Shoot"></PopOver>
                  </Badge>{" "}
                </Col>
                <Col>
                  <br />
                </Col>
              </Row>
            </Container>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default CardGallery;
