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
import "./styles.css";
class Toolltip extends React.Component {
  render() {
    const popover = (
      <Container>
        <Popover
          id="popover-basic"
          className="popover"
          style={{ maxWidth: "90%" }}
        >
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
        <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
          <Button variant="outline-success">Add</Button>
        </OverlayTrigger>
      </>
    );
  }
}

export default Toolltip;
