import React, { Component } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "./App.css";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedFile: null,
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
	fileUploadHandler = () => {
		const data = new FormData();
		// Change the url which is present in .post method.
		data.append("file", this.state.selectedFile);
		axios
			.post(
				"http://localhost:5000/spring-internship/us-central1/app/api/upload",
				data
			)
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
		let size = 10000;
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
									onChange={this.onChangeHandler}
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
		);
	}
}
export default App;
