import React from "react";
import "./styles.css";
import Upload from "./Upload";
import axios from "axios";
import firebase from "firebase";
import {
  Container,
  Button,
  Form,
  Col,
  Row,
} from "react-bootstrap";

export default class App extends React.Component {
  render() {
    // const p_uid = localStorage.getItem("puid");
    // console.log(p_uid);
    // this.setState({ puid: p_uid });
    return (
      <div className="contain">
        <form
          // REVIEW upload link

          action={
            "http://localhost:5000/spring-internship/us-central1/app/api/upload"
          }
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
          <Form.Group as={Row}>
            <Form.Label column sm={2} for="price">
              Price
            </Form.Label>
            <Col sm="10">
              <Form.Control
                as="select"
                sm={10}
                id="price"
                name="price"
              >
                <option value="149">149</option>
                <option value="249">249</option>
                <option value="499">499</option>
                <option value="999">999</option>
                <option value="999">999</option>
                <option value="1499">1499</option>
              </Form.Control>
            </Col>
            <br />
            <br />
          </Form.Group>
          {/* <Form.Group as={Row}>
            <Form.Label column sm={3} for="time-intervel">
              Time Intervel
            </Form.Label>
            <Col sm="9">
              <Form.Control type="text" id="time" name="time-intervel" />
            </Col>
          </Form.Group> */}
          <br />
          <br />

          <label class="location">
            {/* <input type="radio" name="location" value="Indoor" /> Indoor
            <br /> */}
            <input
              type="radio"
              name="location"
              value="Outdoor"
            />{" "}
            Outdoor
            <br />
          </label>

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
