import React from "react";
// import App from "../../components/Gallery/GalleryTesting/App";
import "./styles.css";
import { Jumbotron, Button } from "react-bootstrap";
const DriveLink = () => {
  return (
    <>
      <div className="my-container">
        <Jumbotron>
          <h1>History</h1>
          <p>Photographer</p>
          <p>
            <Button variant="primary">Drive Link</Button>
          </p>
        </Jumbotron>
      </div>
    </>
  );
};

export default DriveLink;
