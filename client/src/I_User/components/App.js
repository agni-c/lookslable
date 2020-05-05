import React from "react";
import "./styles.css";
import { Container } from "react-bootstrap";
import NavBar from "./NavBar";
import HeroMain from "./HeroMain";
export default function App() {
  return (
    <div>
      <NavBar />
      <Container md="auto" className="center">
        <h1 className="margin-bt">Welcome User!</h1>
        <HeroMain />
      </Container>
    </div>
  );
}
