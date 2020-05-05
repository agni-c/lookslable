import React from "react";
import "./styles.css";
import { Navbar, Button, Nav } from "react-bootstrap";

function NavBar() {
  return (
    <>
      <Navbar
        sticky="top"
        bg="dark"
        variant="dark"
        expand="lg"
        className="margin-bt"
      >
        <Navbar.Brand href="#home">Data Selfie App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#upload-photos">View Photos</Nav.Link>
          </Nav>
          <Button variant="outline-light" className="ml-sm-3">
            Logout
          </Button>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default NavBar;
