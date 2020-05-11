import React, { Component } from "react";
import Webcam from "react-webcam";
import { Button } from "react-bootstrap";

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
    this.state = { screenshot: null };
  }
  videoConstraints = {
    width: 350,
    height: 350,
    facingMode: "user",
  };

  screenshot() {
    var screenshot = this.refs.webcam.getScreenshot();
    this.setState({ screenshot: screenshot });
  }

  render() {
    return (
      <div>
        <Webcam
          audio={false}
          ref="webcam"
          height={350}
          width={350}
          videoConstraints={this.videoConstraints}
        />
        <br />
        <Button onClick={this.screenshot.bind(this)}>Capture</Button>
        {this.state.screenshot ? <img src={this.state.screenshot} /> : null}
      </div>
    );
  }
}
