import React from "react";
import Webcam from "react-webcam";

function WebCam() {
  const videoConstraints = {
    width: 720,
    height: 720,
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
        height={720}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={1280}
        videoConstraints={videoConstraints}
      />
      <button onClick={capture}>Capture photo</button>
    </>
  );
}

export default WebCam;
