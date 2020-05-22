import React, { Component } from "react";
import "./main.css";
import { Example } from "./ImageAnimate";
import axios from "axios";
import { Button } from "react-bootstrap";

class Gallery extends Component {
	state = { images: [], isBtnVisible: false };

	someRequest = async () => {
		const responce = await axios.get(
			"http://localhost:5000/spring-internship/us-central1/app/api/upload/usergallery"
		);
		console.log(responce.data);
		const someArray = responce.data;
		console.log(someArray);
		const newArray = someArray.map((img) => {
			return img.images;
		});
		// console.log(newArray);
		this.setState({ images: newArray, isClicked: true });
	};
	toggleBtn() {
		this.setState((prevState) => ({ isBtnVisible: !prevState.isBtnVisible }));
	}
	render() {
		const { isBtnVisible } = this.state;
		return (
			<div className='container-my'>
				<div className='testing-101'>
					<Example images={this.state.images} />
					<button
						style={{
							background: "#56ccf2",
							borderRadius: "10px",
							border: "none",
							cursor: "pointer",
							padding: "9px 20px",
							boxShadow: "0 10px 20px rgba(0, 0, 0, 0.25)",
							position: "relative",
							// bottom: "300px",
							// top: "210px",
							// left: "375px",
							// height: "100px",
							// width: "200px",
						}}
						className={`btnn${isBtnVisible ? "" : "hidden"} `}
						onClick={() => {
							this.someRequest();
							this.toggleBtn();
						}}>
						view Images
					</button>
				</div>
			</div>
		);
	}
}

export default Gallery;
