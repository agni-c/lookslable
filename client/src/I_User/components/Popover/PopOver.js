import React from "react";
import "./popover.css";
import {
	Popover,
	OverlayTrigger,
	Button,
	Form,
	DropdownButton,
	Dropdown,
	ButtonGroup,
} from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import firebase from "firebase";
import SignInScreen from "./../firebase";

class PopOver extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			no_of_users: "",
			phoneNo: "",
			date: "",
			iuid: firebase.auth().currentUser.uid,
			currentPuid: props.puid,
		};
	}
	phoneNoHandler = (value) => {
		this.setState({
			phoneNo: value,
		});
		console.log(value);
	};
	dateHandler = (value) => {
		this.setState({
			date: value,
		});
		console.log(value);
	};

	handleSubmit = () => {
		console.log("fasak");
		axios
			.post(
				`http://localhost:5000/spring-internship/us-central1/app/api/booking/${
					firebase.auth().currentUser.uid
				}`,
				{
					PhoneNo: this.state.phoneNo,

					date: this.state.date,

					puid: this.state.currentPuid,
					price: "350",

					numberOfUsers: this.state.no_of_users,
				}
			)
			.then((res) => {
				console.log(res.data);
				console.log("Done!");
				toast.info("Booked Successfully", {
					position: "top-right",
					autoClose: 5000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
				});
			})
			.catch((err) => {
				console.log(err);
			});
	};
	popover = (
		<Popover id='popover-top' className='pop-over'>
			<Popover.Title as='h3'>Number of users</Popover.Title>
			<Popover.Content>
				<Form className='form-c'>
					<Form.Group controlId='formGridPhoneNo1'>
						<Form.Label>Phone No</Form.Label>
						<Form.Control
							onChange={(e) => {
								this.phoneNoHandler(e.target.value);
							}}
							className='colApp'
							type='number'
							placeholder='+91 '
						/>
					</Form.Group>
					<Form.Group controlId='formGridDate1'>
						<Form.Label>Date & Time</Form.Label>
						<Form.Control
							className='colApp'
							type='dateTime-local'
							placeholder='Date'
							onChange={(e) => {
								this.dateHandler(e.target.value);
							}}
						/>
					</Form.Group>
					<Form.Group controlId='exampleForm.ControlSelect1'>
						<Form.Label>No Of Users</Form.Label>
						<Form.Control
							as='select'
							onChange={(e) => {
								this.setState({
									no_of_users: e.target.value,
								});
							}}>
							<option>1</option>
							<option>2</option>

							<option>5-6</option>
						</Form.Control>
					</Form.Group>
					<Button
						variant='primary'
						onClick={() => {
							console.log("clicked");
							this.handleSubmit();
						}}>
						Shoot
					</Button>
				</Form>
			</Popover.Content>
		</Popover>
	);
	render() {
		return (
			<div>
				<OverlayTrigger trigger='click' placement='top' overlay={this.popover}>
					<Button
						variant='outline-primary'
						style={{
							cursor: "pointer",
							textAlign: "center",
							marginLeft: "80%",
						}}>
						{" "}
						Shoot{" "}
					</Button>
				</OverlayTrigger>
			</div>
		);
	}
}

export default PopOver;
