import React from "react";
import {
  Form,
  Button,
  Col,
  Row,
  Toast,
} from "react-bootstrap";
import WebCam from "../WebCam/WebCam";

const SampleForm = () => {
  return (
    <div className="contain">
      <form
        //REVIEW form link
        action={`http://localhost:5000/spring-internship/us-central1/app/api/webcam/form/${
          firebase.auth().currentUser
        }`}
        method="post"
        enctype="multipart/form-data"
      >
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

        <WebCam />
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
};

export default SampleForm;
