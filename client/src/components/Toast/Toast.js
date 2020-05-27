import React, { useState } from "react";
import { Toast, Row, Col, Button } from "react-bootstrap";
function ToastComponent() {
  const [show, setShow] = useState(false);

  return (
    <Row>
      <Col xs={6}>
        <Toast
          style={{
            position: "absolute",
            top: 0,
            right: 0,
          }}
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
            <strong className="mr-auto">Success</strong>
            <small>1 sec ago</small>
          </Toast.Header>
          <Toast.Body>Successfully submited!</Toast.Body>
        </Toast>
      </Col>
      <Col xs={6}>
        <Button onClick={() => setShow(true)}></Button>
      </Col>
    </Row>
  );
}

export default ToastComponent;
