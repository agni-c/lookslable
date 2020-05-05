import React from "react";

import { Popover, OverlayTrigger, Button } from "react-bootstrap";

export default function PopOver(props) {
  const popover = (
    <Popover id="popover-basic">
      <Popover.Title as="h3">Number of users</Popover.Title>
      <Popover.Content>
        <Button variant="outline-success">U1</Button>
        <br />
        <br />
        <Button variant="outline-success">U2</Button>
        <br />
        <br />
        <Button variant="outline-success">U5-6</Button>
      </Popover.Content>
    </Popover>
  );
  return (
    <div>
      <OverlayTrigger trigger="click" placement="right" overlay={popover}>
        <Button variant="success">{props.text}</Button>
      </OverlayTrigger>
    </div>
  );
}
