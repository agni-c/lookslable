import React from "react";
import "./styles.css";
import Upload from "./Upload";
import {
  Container,
  Button,
  Form,
  Col,
  Row,
} from "react-bootstrap";
import firebase from "firebase";

export default class App extends React.Component {
  render() {
    return (
      <div className="contain">
        <form
          // REVIEW upload link

          action={`http://localhost:5000/spring-internship/us-central1/app/api/upload/${
            firebase.auth().currentUser.uid
          }`}
          method="post"
          enctype="multipart/form-data"
        >
          <Form.Group>
            <Form.Label colomn="lg" lg={2} for="upload">
              Upload Images
            </Form.Label>
            <Col>
              <input
                type="file"
                accept="image/*"
                id="upload"
                name="uploads"
                required
              />
            </Col>
          </Form.Group>
          <br />
          <br />
          <Form.Group as={Row}>
            <Form.Label
              column
              sm="2"
              size="lg"
              for="landmark"
            >
              {" "}
              Landmark
            </Form.Label>
            <Col sm="10">
              <Form.Control
                type="text"
                name="landmark"
                placeholder="eg. lake gardens"
                required
                id="landmark"
              />
            </Col>
            <br />
            <br />
          </Form.Group>

          <br />
          <br />

          <Button
            variant="outline-primary"
            className="mb-2"
            type="submit"
          >
            Upload
          </Button>
        </form>
      </div>
    );
  }
}
