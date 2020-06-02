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
                    <div class="icon fa-medium is-left">
                      <i
                        class="fas fa-map-marker"
                        style={{ fontSize: "36px" }}
                      ></i>
                    </div>
                  </Badge>{" "}
                </Col>
                <Col>
                  <br />
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
