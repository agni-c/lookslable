import React from "react";
import Webcam from "react-webcam";
import { Button } from "react-bootstrap";

function WebCam() {
  const videoConstraints = {
    width: 350,
    height: 350,
    facingMode: "user",
  };
  const webcamRef = React.useRef(null);
  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
  }, [webcamRef]);
  console.log(webcamRef);

  return (
    <>
      <Webcam
        audio={false}
        height={350}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={350}
        videoConstraints={videoConstraints}
      />
      <br />
      <Button variant="outline-success" onClick={capture}>
        Capture photo
      </Button>
    </>
  );
}

export default WebCam;
