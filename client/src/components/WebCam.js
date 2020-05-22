import React, { Component } from "react";
import Webcam from "react-webcam";
import { Button } from "react-bootstrap";
import GeoLocation from "./Location";

// function WebCam() {
//   const videoConstraints = {
//     width: 350,
//     height: 350,
//     facingMode: "user",
//   };
//   const webcamRef = React.useRef(null);
//   const capture = React.useCallback(() => {
//     const imageSrc = webcamRef.current.getScreenshot();
//   }, [webcamRef]);
//   console.log(webcamRef);

//   return (
//     <>
//       <Webcam
//         ref="webcam"
//         audio={false}
//         height={350}
//         ref={webcamRef}
//         screenshotFormat="image/jpeg"
//         width={350}
//         videoConstraints={videoConstraints}
//       />
//       <br />
//       <Button variant="outline-success" onClick={capture}>
//         Capture photo
//       </Button>
//     </>
//   );
// }

// export default WebCam;

export default class WebCam extends Component {
  constructor(props) {
    super(props);
    this.state = {
      screenshot: null,
      uid: localStorage.getItem("puid"),
    };
  }
  videoConstraints = {
    width: 350,
    height: 350,
    facingMode: "user",
  };
  clickHandler = () => {
    console.log(this.state);
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
        "http://localhost:5000/spring-internship/us-central1/app/api/webcam",
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
          height={350}
          width={350}
          screenshotFormat="image/png"
          videoConstraints={this.videoConstraints}
        />
        <br />
        <Button
          onClick={
            (this.screenshot.bind(this), this.clickHandler)
          }
        >
          Capture
        </Button>
        {this.state.screenshot ? null : null}
      </div>
    );
  }
}
