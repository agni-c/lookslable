import React, { useState } from "react";
import { Form, Button, Col, Row } from "react-bootstrap";
export default function Upload() {
	const [validated, setValidated] = useState(false);

	const handleSubmit = (event) => {
		const form = event.currentTarget;

		fetch(
			"http://localhost:5000/spring-internship/us-central1/app/api/upload",
			{
				method: "POST",
				mode: "no-cors",
				headers: {
					Accept: "application/json",
					type: "formData",
				},
				body: form,
			}
		).then(() => {
			console.log("done");
			setValidated(true);
			if (form.checkValidity() === false) {
				event.preventDefault();
				event.stopPropagation();
			}
		});
	};

	return (
		<>
			<Form
				noValidate
				validated={validated}
				encType='multipart/form-data'
				onSubmit={handleSubmit}>
				<Form.Row>
					<Form.Group as={Col} md='4' controlId='validationCustom01'>
						<Form.Label>Landmark</Form.Label>
						<Form.Control
							required
							type='text'
							placeholder='eg Lake gardens'
							name='landmark'
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
									label='Indoor'
									name='indoor'
									id='indoor'
								/>
								<Form.Check
									type='radio'
									label='Outdoor'
									name='outdoor'
									id='outdoor'
								/>
							</Col>
						</Form.Group>
					</Form.Group>
				</Form.Row>
				<Form.Group />
			</Form>
			<Form.Group>
				<div className='mb-3'>
					<Form.File
						id='formcheck-api-regular'
						name='images'
						style={{ background: "#eee" }}>
						<Form.File.Input isValid multiple />
						<Form.Control.Feedback type='valid' />
					</Form.File>
				</div>
			</Form.Group>
			<Button type='submit' onClick={handleSubmit}>
				Upload
			</Button>
		</>
	);
}
