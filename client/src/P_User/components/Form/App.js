import React from "react";
import "./styles.css";
import Upload from "./Upload";
import { Container, Button } from "react-bootstrap";

export default class App extends React.Component {
	render() {
		return (
			<form
				action='http://localhost:5000/spring-internship/us-central1/app/api/upload'
				method='post'
				enctype='multipart/form-data'>
				<label for='upload'>Upload Images</label>
				<input
					type='file'
					accept='image/*'
					id='upload'
					name='uploads'
					multiple
					required
				/>
				<br />
				<br />

				<label for='landmark'>Landmark</label>
				<input
					type='text'
					name='landmark'
					placeholder='eg. lake gardens'
					required
					id='landmark'
				/>
				<br />
				<br />

				<label for='price'>Price</label>

				<select id='price' name='price'>
					<option value='149'>149</option>
					<option value='249'>249</option>
					<option value='499'>499</option>
					<option value='999'>999</option>
					<option value='999'>999</option>
					<option value='1499'>1499</option>
				</select>
				<br />
				<br />

				<label for='time'>(date and time)</label>
				<input type='datetime-local' id='time' name='time' />

				<br />
				<br />

				<label class='location'>
					<input type='radio' name='location' value='Indoor' /> Indoor
					<br />
					<input type='radio' name='location' value='Outdoor' /> Outdoor
					<br />
				</label>

				<br />
				<br />

				<button type='submit'>Upload</button>
			</form>
		);
	}
}
