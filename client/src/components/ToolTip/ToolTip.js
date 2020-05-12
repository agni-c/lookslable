import React from "react";
import {
  Popover,
  OverlayTrigger,
  Button,
  Container,
  Tooltip,
} from "react-bootstrap";
import Location from "../Location/Location";
import SampleForm from "../Forms/SampleForm";
import "./main.css";
class Toolltip extends React.Component {
  render() {
    const popover = (
      <Container>
        <Popover id="popover-basic" className="popover">
          <Popover.Title as="h3">Location</Popover.Title>
          <Popover.Content>
            <Location />
            <SampleForm />
          </Popover.Content>
        </Popover>
      </Container>
    );
    return (
      <>
        <OverlayTrigger trigger="click" placement="right" overlay={popover}>
          <Button variant="outline-success">Add</Button>
        </OverlayTrigger>
      </>
    );
  }
}

export default Toolltip;
