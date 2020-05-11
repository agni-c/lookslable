import React, { useRef } from "react";
import Webcam from "react-webcam";
import { Button } from "react-bootstrap";

function WebCam() {
	const videoConstraints = {
		width: 350,
		height: 350,
		facingMode: "user",
	};
	const webcamRef = useRef(null);
	const capture = React.useCallback(async () => {
		const imageSrc = webcamRef.current.getScreenshot();

		const options = {
			method: "POST",
			headers: {
				"Content-Type": "image/png",
			},
			body: imageSrc,
		};

		try {
			await fetch(
				"http://localhost:5000/spring-internship/us-central1/app/api/webcam",
				options
			);
		} catch (error) {
			console.log(error);
		}
	}, [webcamRef]);
	console.log(webcamRef);

	return (
		<>
			<Webcam
				audio={false}
				height={350}
				ref={webcamRef}
				screenshotFormat='image/png'
				width={350}
				videoConstraints={videoConstraints}
			/>
			<br />
			<Button variant='outline-success' onClick={capture}>
				Capture photo
			</Button>
		</>
	);
}

export default WebCam;
