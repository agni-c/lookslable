import React from "react";
import Webcam from "react-webcam";

function WebCam() {
  const videoConstraints = {
    width: 650,
    height: 650,
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
        height={650}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={650}
        videoConstraints={videoConstraints}
      />
      <button onClick={capture}>Capture photo</button>
    </>
  );
}

export default WebCam;
