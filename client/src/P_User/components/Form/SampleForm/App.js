import React, { Component } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "./App.css";
import { Form, Button, Col, Row } from "react-bootstrap";
import "../styles.css";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedFile: null,
			landmark: "",
			price: "",
		};
	}
	onChangeHandler = (event) => {
		var file = event.target.files;
		console.log(file);
		console.log(this.validateSize(event));
		if (this.validateSize(event)) {
			console.log(file);
			this.setState({
				selectedFile: file,
			});
		}
	};
	onChangeLandmark = (event) => {
		var landmarks = event.target.landmarks;
		console.log(landmarks);
		this.setState({
			landmark: landmarks,
		});
	};
	onChangePrice = (event) => {
		var prices = event.target.landmarks;
		console.log(prices);
		this.setState({
			price: prices,
		});
	};
	fileUploadHandler = () => {
		const data = new FormData();
		// Change the url which is present in .post method.
		data.append("file", this.state.selectedFile);
		data.append("landmarks", this.state.landmark);
		data.append("prices", this.state.price);
		axios
			.post("https://spring-internship.web.app//api/upload", data)
			.then((res) => {
				//  print response status
				toast.success("upload success");
			})
			.catch((err) => {
				// print response status
				toast.error("upload fail");
			});
	};
	validateSize = (event) => {
		let file = event.target.files;
		let size = 330000;
		let err = "";
		console.log(file.size);
		if (file.size > size) {
			err = file.type + "is too large, please pick a smaller file\n";
			toast.error(err);
		}
		return true;
	};
	render() {
		return (
			<>
				<Form onSubmit={this.handleSubmit}>
					<Form.Row>
						<Form.Group as={Col} md='4' controlId='validationCustom01'>
							<Form.Label>Landmark</Form.Label>
							<Form.Control
								className='landmarks'
								onChange={this.onChangeLandmark}
								required
								name='landmark'
								type='text'
								placeholder='eg Lake gardens'
								defaultValue='Mark'
							/>
							<Form.Control.Feedback>Looks good!</Form.Control.Feedback>
						</Form.Group>
						<Form.Group controlId='exampleForm.ControlSelect1'>
							<Form.Label>Price</Form.Label>
							<Form.Control
								as='select'
								name='price'
								className='prices'
								onChange={this.onChangePrice}>
								<option>149</option>
								<option>249</option>
								<option>499</option>
								<option>999</option>
								<option>1499</option>
							</Form.Control>
						</Form.Group>

						<Form.Group as={Col} md='4' controlId='validationCustomUsername'>
							<Form.Label>Type</Form.Label>
							<Form.Group as={Row}>
								<Col sm={10}>
									<Form.Check
										type='radio'
										name='indoor'
										label='Indoor'
										name='formHorizontalRadios'
										id='formHorizontalRadios1'
									/>
									<Form.Check
										type='radio'
										name='outdoor'
										label='Outdoor'
										name='formHorizontalRadios'
										id='formHorizontalRadios2'
									/>
								</Col>
							</Form.Group>
						</Form.Group>
					</Form.Row>
					<Form.Group />
					<Form.Group>
						<div className='container'>
							<div className='row'>
								<div className='col-md-6'>
									<ToastContainer />
									<form method='post' action='#' id='#'>
										<div className='form-group files'>
											<label>Upload Your Image </label>
											<input
												type='file'
												multiple
												name='file'
												className='form-control'
												// onChange={this.onChangeHandler}
											/>
										</div>
										<div className='col-md-6 pull-right'>
											<button
												width='100%'
												type='button'
												className='btn btn-info'
												onClick={this.fileUploadHandler}>
												Upload Image
											</button>
										</div>
									</form>
								</div>
							</div>
						</div>
						<br />
						<Button
							className='mr-1'
							type='submit'
							onSubmit={this.fileUploadHandler}>
							Submit
						</Button>
					</Form.Group>
				</Form>
			</>
		);
	}
}
export default App;
