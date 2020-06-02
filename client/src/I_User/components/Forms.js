import React from "react";
import { Form, Button, Col } from "react-bootstrap";
class Forms extends React.Component {
	render() {
		return (
			<div>
				<Form
					action={`http://localhost:5000/spring-internship/us-central1/app/api/uploaddetails`}
					method='post'>
					<Form.Row>
						<Form.Group as={Col} controlId='formGridEmail'>
							<Form.Label>Email</Form.Label>
							<Form.Control
								className='colApp'
								type='email'
								name='email'
								placeholder='Enter email'
							/>
						</Form.Group>
					</Form.Row>

					<Form.Group controlId='formGridAddress1'>
						<Form.Label>Address</Form.Label>
						<Form.Control
							className='colApp'
							name='address'
							placeholder='1234 Main St'
						/>
					</Form.Group>
					<Form.Group controlId='formGridAddress1'>
						<Form.Label>Phone No</Form.Label>
						<Form.Control
							className='colApp'
							name='phoneno'
							placeholder='+91 '
						/>
					</Form.Group>
					<Form.Group controlId='formGridAddress1'>
						<Form.Label>Event</Form.Label>
						<Form.Control
							className='colApp'
							name='event'
							placeholder='Event_Name'
						/>
					</Form.Group>
					<Form.Group controlId='formGridAddress1'>
						<Form.Label>Date</Form.Label>
						<Form.Control className='colApp' name='date' placeholder='Date' />
					</Form.Group>
					<Form.Group controlId='formGridAddress1'>
						<Form.Label>Time</Form.Label>
						<Form.Control className='colApp' name='time' placeholder='Time' />
					</Form.Group>

					<Button variant='primary' type='submit'>
						Submit
					</Button>
				</Form>
			</div>
		);
	}
}

export default Forms;
