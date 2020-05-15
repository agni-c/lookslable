import React from "react";
import {
  Popover,
  OverlayTrigger,
  Button,
  Container,
  Tooltip,
} from "react-bootstrap";
import App from "../Forms/Form/App";
import "./styles.css";
class Toolltipform extends React.Component {
  render() {
    const popover = (
      <Container>
        <Popover
          id="popover-basic"
          className="backc"
          style={{ maxWidth: "90%" }}
        >
          <Popover.Title as="h3">
            <div> Submit Location Images</div>
          </Popover.Title>
          <Popover.Content>
            <App />
          </Popover.Content>
        </Popover>
      </Container>
    );
    return (
      <>
        <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
          <Button variant="outline-success">Submit location Images</Button>
        </OverlayTrigger>
      </>
    );
  }
}

export default Toolltipform;
