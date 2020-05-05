import React, { useState } from "react";
import { Form, Button, Col, Row } from "react-bootstrap";
import "./styles.css";
import App from "./SampleForm/App";
export default function Upload() {
  //   const [validated, setValidated] = useState(false);

  //   const handleSubmit = (event) => {
  //     const form = event.currentTarget;
  //     if (form.checkValidity() === false) {
  //       event.preventDefault();
  //       event.stopPropagation();
  //     }

  //     setValidated(true);
  //   };
  const [startDate, setStartDate] = useState(new Date());
  return (
    <>
      {/* <Datepicker /> */}

      <Form noValidate /*{validated={validated}} onSubmit={handleSubmit} */>
        <Form.Row>
          <Form.Group as={Col} md="4" controlId="validationCustom01">
            <Form.Label>Landmark</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="eg Lake gardens"
              defaultValue="Mark"
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Price</Form.Label>
            <Form.Control as="select">
              <option>149</option>
              <option>249</option>
              <option>499</option>
              <option>999</option>
              <option>1499</option>
            </Form.Control>
          </Form.Group>

          <Form.Group as={Col} md="4" controlId="validationCustomUsername">
            <Form.Label>Type</Form.Label>
            <Form.Group as={Row}>
              <Col sm={10}>
                <Form.Check
                  type="radio"
                  label="Indoor"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios1"
                />
                <Form.Check
                  type="radio"
                  label="Outdoor"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios2"
                />
              </Col>
            </Form.Group>
          </Form.Group>
        </Form.Row>
        <Form.Group />
      </Form>

      <Form.Group>
        <App />
      </Form.Group>
    </>
  );
}
