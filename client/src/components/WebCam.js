import React, { Component } from "react";
import Webcam from "react-webcam";
import { Button } from "react-bootstrap";
import GeoLocation from "./Location";
import firebase from "firebase";




export default class WebCam extends Component {
  constructor(props) {
    super(props);
    this.state = { screenshot: null };
  }
  videoConstraints = {
    width: 325,
    height: 325,
    facingMode: "user",
  };

  async screenshot() {
    var image64 = this.refs.webcam.getScreenshot();
    const screenshot = { image64 };
    this.setState({ screenshot: screenshot });
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(screenshot),
    };

    try {
      await fetch(
        `http://localhost:5000/spring-internship/us-central1/app/api/webcam/${
          firebase.auth().currentUser.uid
        }`,
        options
      );
    } catch (error) {
      console.log(error);
    }
  }
  render() {
    return (
      <div>
        <Webcam
          audio={false}
          ref="webcam"
          height={325}
          width={325}
          screenshotFormat="image/png"
          videoConstraints={this.videoConstraints}
        />
        <br />
        <Button onClick={this.screenshot.bind(this)}>
          Capture
        </Button>
        {this.state.screenshot ? null : null}
      </div>
    );
  }
}
