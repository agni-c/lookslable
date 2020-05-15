import React from "react";
import { Form, Button, Col, Row, Toast } from "react-bootstrap";
import WebCam from "../WebCam/WebCam";

const SampleForm = () => {
	return (
		<div className='contain'>
			<form
				//REVIEW form link
				action={`${process.env.REACT_APP_DEVELOPMENT}/api/webcam/form`}
				method='post'
				enctype='multipart/form-data'>
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
						/>
					</Col>
					<br />
					<br />
				</Form.Group>
				<Form.Group as={Row}>
					<Form.Label column sm={2} for='price'>
						Price
					</Form.Label>
					<Col sm='10'>
						<Form.Control as='select' sm={10} id='price' name='price'>
							<option value='149'>149</option>
							<option value='249'>249</option>
							<option value='499'>499</option>
							<option value='999'>999</option>
							<option value='999'>999</option>
							<option value='1499'>1499</option>
						</Form.Control>
					</Col>
					<br />
					<br />
				</Form.Group>
				<Form.Group as={Row}>
					<Form.Label column sm={3} for='time'>
						Date and Time
					</Form.Label>
					<Col sm='9'>
						<Form.Control type='datetime-local' id='time' name='time' />
					</Col>
				</Form.Group>
				<Form.Group>
					<label class='location'>
						<input type='radio' name='location' value='Indoor' /> Indoor
						<br />
						<input type='radio' name='location' value='Outdoor' /> Outdoor
						<br />
					</label>
				</Form.Group>
				<WebCam />
				<br />
				<br />

				<Button variant='outline-primary' className='mb-2' type='submit'>
					Upload
				</Button>
			</form>
		</div>
	);
};

export default SampleForm;
