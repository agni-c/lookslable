import React, { useState } from "react";
import { Row, Col, Toast, Button } from "react-bootstrap";

const NotificationToast = () => {
  function Example() {
    const [show, setShow] = useState(false);

    return (
      <Row>
        <Col xs={6}>
          <Toast
            onClose={() => setShow(false)}
            show={show}
            delay={3000}
            autohide
          >
            <Toast.Header>
              <img
                src="holder.js/20x20?text=%20"
                className="rounded mr-2"
                alt=""
              />
              <strong className="mr-auto">Submited</strong>
            </Toast.Header>
            <Toast.Body>Succesfully submited</Toast.Body>
          </Toast>
        </Col>
        <Col xs={6}>
          <Button onClick={() => setShow(true)}>Show Toast</Button>
        </Col>
      </Row>
    );
  }
};
export default NotificationToast;
