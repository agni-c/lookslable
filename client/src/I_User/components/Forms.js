import React from "react";
import { Form, Button, Col } from "react-bootstrap";
class Forms extends React.Component {
  render() {
    return (
      <div>
        <Form>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                className="colApp"
                type="email"
                placeholder="Enter email"
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                className="colApp"
                type="password"
                placeholder="Password"
              />
            </Form.Group>
          </Form.Row>

          <Form.Group controlId="formGridAddress1">
            <Form.Label>Address</Form.Label>
            <Form.Control className="colApp" placeholder="1234 Main St" />
          </Form.Group>
          <Form.Group controlId="formGridAddress1">
            <Form.Label>Phone No</Form.Label>
            <Form.Control className="colApp" placeholder="+91 " />
          </Form.Group>
          <Form.Group controlId="formGridAddress1">
            <Form.Label>Event</Form.Label>
            <Form.Control className="colApp" placeholder="Event_Name" />
          </Form.Group>
          <Form.Group controlId="formGridAddress1">
            <Form.Label>Date</Form.Label>
            <Form.Control className="colApp" placeholder="Date" />
          </Form.Group>
          <Form.Group controlId="formGridAddress1">
            <Form.Label>Time</Form.Label>
            <Form.Control className="colApp" placeholder="Time" />
          </Form.Group>

          <Form.Group id="formGridCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

export default Forms;
