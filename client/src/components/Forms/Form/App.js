import React, { useEffect, useState } from "react";
import "./styles.css";
import Upload from "./Upload";
import axios from "axios";
import { Container, Button, Form, Col, Row } from "react-bootstrap";
import firebase from "firebase";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getEditLocation, uploadFormDATA } from "../../../api";

const App = () => {
	const [landmarks, setLandmarks] = useState([]);
	const [file, setFile] = useState(null);
	const [currentLandmark, setCurrentLandmark] = useState("");

	const onFormSubmit = async (e) => {
		e.preventDefault();
		const formData = new FormData();
		formData.append("uploads", file);
		formData.set("landmark", currentLandmark);
		const config = {
			headers: {
				"content-type": "multipart/form-data",
			},
		};

		await uploadFormDATA(formData, config);
	};

	const testing = () => {
		toast("Successfully Submited");
	};
	const onChange = (e) => {
		setFile(e.target.files[0]);
		console.log("Changedd");
	};
	const onLandmarkChange = (value) => {
		currentLandmarkUpdate(value);
		// console.log(value);
		// this.setState({ landmark: value });
	};
	const currentLandmarkUpdate = (value) => {
		console.log(value);
		setCurrentLandmark(value);
	};
	useEffect(() => {
		(async () => {
			const responce = await getEditLocation();

			const entries = Object.entries(responce.data);

			entries.map((ele, index) => {
				let land = ele[1].landmark;
				setLandmarks((landmarks) => [...landmarks, land]);
			});
		})();
	}, []);
	return (
		<div className="contain">
			<form
				// REVIEW upload link

				// action={`http://localhost:5000/spring-internship/us-central1/app/api/upload/${
				//   firebase.auth().currentUser.uid
				// }`}
				// method="post"
				// enctype="multipart/form-data"
				onSubmit={onFormSubmit}>
				{" "}
				<Form.Group>
					<Form.Label colomn="lg" lg={2} for="upload">
						Upload Images
					</Form.Label>
					<Col>
						<input
							type="file"
							accept="image/*"
							id="upload"
							name="uploads"
							onChange={onChange}
							required
						/>
					</Col>
				</Form.Group>
				<br />
				<br />
				<Form.Group as={Row}>
					<Form.Label column sm="2" size="lg" for="landmark">
						{" "}
						Landmark
					</Form.Label>
					<Col sm="10">
						<Form.Control
							as="select"
							name="landmark"
							placeholder="eg. lake gardens"
							required
							id="landmark"
							onChange={(e) => {
								onLandmarkChange(e.target.value);
							}}>
							{landmarks.map((ele, index) => {
								return <option value={ele}>{ele}</option>;
							})}
						</Form.Control>
					</Col>
					<br />
					<br />
				</Form.Group>
				<br />
				<br />
				<Button variant="outline-primary" className="mb-2" type="submit">
					Upload
				</Button>
				<ToastContainer />
			</form>
		</div>
	);
};

export default App;
