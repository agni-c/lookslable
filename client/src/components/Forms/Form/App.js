import React from "react";
import "./styles.css";
import Upload from "./Upload";
import { Container, Button, Form, Col, Row } from "react-bootstrap";
import firebase from "firebase";
import axios from "axios";

export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			file: null,
			landmark: "",
		};
		this.onFormSubmit = this.onFormSubmit.bind(this);
		this.onChange = this.onChange.bind(this);
		// this.onLandmarkChange = this.onLandmarkChange.bind(this);
	}
	onFormSubmit(e) {
		e.preventDefault();
		const formData = new FormData();
		formData.append("uploads", this.state.file);
		formData.set("landmark", this.state.landmark);
		const config = {
			headers: {
				"content-type": "multipart/form-data",
			},
		};
		axios
			.post(
				`http://localhost:5000/spring-internship/us-central1/app/api/upload/${
					firebase.auth().currentUser.uid
				}`,
				formData,
				config
			)
			.then((response) => {
				alert("The file is successfully uploaded");
			})
			.catch((error) => {});
	}
	onChange(e) {
		this.setState({ file: e.target.files[0] });
	}
	// onLandmarkChange(e) {
	// 	var landmarks = e.target.landmark;
	// 	console.log(landmarks);
	// 	this.setState({
	// 		landmark: landmarks,
	// 	});
	// }
	onLandmarkChange = (value) => {
		// console.log(value
		this.setState({ landmark: value });
	};
	render() {
		return (
			<div className='contain'>
				<form
					// REVIEW upload link

					// action={`http://localhost:5000/spring-internship/us-central1/app/api/upload/${
					//   firebase.auth().currentUser.uid
					// }`}
					// method="post"
					// enctype='multipart/form-data'
					onSubmit={this.onFormSubmit}>
					<Form.Group>
						<Form.Label colomn='lg' lg={2} for='upload'>
							Upload Images
						</Form.Label>
						<Col>
							<input
								type='file'
								accept='image/*'
								id='upload'
								name='uploads'
								onChange={this.onChange}
								required
							/>
						</Col>
					</Form.Group>
					<br />
					<br />
					<Form.Group as={Row}>
						<Form.Label column sm='2' size='lg' for='landmark'>
							{" "}
							Landmark
						</Form.Label>
						<Col sm='10'>
							<Form.Control
								type='text'
								name='landmark'
								placeholder='eg. lake gardens'
								required
								id='landmark'
								onChange={(e) => {
									console.log(e.target.value);
									this.onLandmarkChange(e.target.value);
								}}
							/>
						</Col>
						<br />
						<br />
					</Form.Group>

					<br />
					<br />

					<Button variant='outline-primary' className='mb-2' type='submit'>
						Upload
					</Button>
				</form>
			</div>
		);
	}
}
