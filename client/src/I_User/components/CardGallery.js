import React from "react";
import { Card, Button, Badge, Container, Row, Col } from "react-bootstrap";
import "./styles.css";
import CalenderA from "./Calender";
import Gallery from "./Gallery";
import PopOver from "./PopOver";

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
                  <Badge variant="success">
                    <PopOver text="No of Users" />
                  </Badge>{" "}
                </Col>
                <Col>
                  <br />
                  <Badge variant="success" style={{ padding: "15px" }}>
                    200
                  </Badge>{" "}
                </Col>
                <Col>
                  <br />
                  <Button variant="success" className="margin-rg">
                    Book
                  </Button>
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
