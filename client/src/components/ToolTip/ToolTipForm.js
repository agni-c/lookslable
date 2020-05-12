import React from "react";
import {
  Popover,
  OverlayTrigger,
  Button,
  Container,
  Tooltip,
} from "react-bootstrap";
import App from "../Forms/Form/App";
import "./main.css";
class Toolltipform extends React.Component {
  render() {
    const popover = (
      <Container>
        <Popover id="popover-basic" className="popover">
          <Popover.Title as="h3">Submit Location Images</Popover.Title>
          <Popover.Content>
            <App />
          </Popover.Content>
        </Popover>
      </Container>
    );
    return (
      <>
        <OverlayTrigger trigger="click" placement="right" overlay={popover}>
          <Button variant="outline-success">Submit location Images</Button>
        </OverlayTrigger>
      </>
    );
  }
}

export default Toolltipform;
