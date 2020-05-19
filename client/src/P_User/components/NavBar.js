import React from "react";
import "./main.css";
import { Navbar, Button, Nav, Container } from "react-bootstrap";
import firebase from "firebase";

function NavBar() {
  return (
    <>
      <container>
        <Navbar sticky="top" bg="dark" variant="dark" expand="lg">
          <Navbar.Brand href="#home">Photographer</Navbar.Brand>
          <Navbar.Collapse id="basic-navbar-nav"></Navbar.Collapse>
          <Button
            variant="outline-light"
            className="ml-sm-3"
            onClick={() => firebase.auth().signOut()}
          >
            Logout
          </Button>
        </Navbar>
      </container>
    </>
  );
}

export default NavBar;
