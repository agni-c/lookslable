import React from "react";
import "./main.css";
import { Navbar, Button, Nav, Container } from "react-bootstrap";
import firebase from "firebase";

function NavBar() {
  return (
    <>
      <Container>
        <Navbar sticky="top" bg="dark" variant="dark" expand="lg">
          <Navbar.Brand href="#home">Data Selfie App</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Cam</Nav.Link>
              <Nav.Link href="#link">Webcam Photos</Nav.Link>
              <Nav.Link href="#upload-photos">Upload Photos</Nav.Link>
            </Nav>
            <Button
              variant="outline-light"
              className="ml-sm-3"
              onClick={() => firebase.auth().signOut()}
            >
              Logout
            </Button>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </>
  );
}

export default NavBar;
