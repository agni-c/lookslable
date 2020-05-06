import React, { useState } from "react";

import "./styles.css";
import App from "./SampleForm/App";
class Upload extends React.Component {
<<<<<<< HEAD
	constructor() {
		super();
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleSubmit(event) {
		event.preventDefault();
		const data = new FormData(event.target);

		axios
			.post(
				"http://localhost:3000/spring-internship/us-central1/app/api/upload",
				data
			)
			.then((res) => {
				//  print response status
				console.log("Data Sended");
			})
			.catch((err) => {
				// print response status
				console.log("Something went wrong");
			});
	}
	render() {
		return (
			<>
				{/* <Datepicker /> */}

				<Form onSubmit={this.handleSubmit}>
					<Form.Row>
						<Form.Group as={Col} md='4' controlId='validationCustom01'>
							<Form.Label>Landmark</Form.Label>
							<Form.Control
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
							<Form.Control as='select' name='price'>
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
						<App />
						<br />
						<Button className='mr-1' type='submit'>
							Submit
						</Button>
					</Form.Group>
				</Form>
			</>
		);
	}

}

export default Upload;
