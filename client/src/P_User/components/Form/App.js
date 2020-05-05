import React from "react";
import "./styles.css";
import Upload from "./Upload";
import { Container, Button } from "react-bootstrap";
export default function AppForm() {
  return (
    <div className="App">
      <Container>
        <h2>Upload Images</h2>
        <Upload />
      </Container>
    </div>
  );
}
