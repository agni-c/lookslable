import React from "react";
import "./popover.css";
import { Popover, OverlayTrigger, Button, Form } from "react-bootstrap";

export default function PopOver(props) {
  const popover = (
    <Popover id="popover-top" className="pop-over">
      <Popover.Title as="h3">Number of users</Popover.Title>
      <Popover.Content>
        <Form className="form-c">
          <Form.Group controlId="formGridPhoneNo1">
            <Form.Label>Phone No</Form.Label>
            <Form.Control className="colApp" type="number" placeholder="+91 " />
          </Form.Group>
          <Form.Group controlId="formGridDate1">
            <Form.Label>Date</Form.Label>
            <Form.Control className="colApp" type="date" placeholder="Date" />
          </Form.Group>
          <Form.Group controlId="formGridTime1">
            <Form.Label>Time</Form.Label>
            <Form.Control className="colApp" placeholder="Time" />
          </Form.Group>
          <Button variant="primary">Shoot</Button>
        </Form>
      </Popover.Content>
    </Popover>
  );
  return (
    <div>
      <OverlayTrigger trigger="click" placement="top" overlay={popover}>
        <h4> {props.text} </h4>
      </OverlayTrigger>
    </div>
  );
}
