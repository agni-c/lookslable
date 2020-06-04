import React from "react";
import { useState } from "react";
import { Carousel } from "react-bootstrap";
import axios from "axios";

export default function Gallery() {
	const [index, setIndex] = useState(0);

	const handleSelect = (selectedIndex, e) => {
		setIndex(selectedIndex);
	};
	const pictures = async () => {
		let pics = await axios.get(
			"http://localhost:5000/spring-internship/us-central1/app/api/upload/allusergallery"
		);
		return pics;
	};
	/* eslint-disable */
	return (
		<div>
			{pictures().map((pic) => {
				<Carousel
					indicators={false}
					activeIndex={index}
					onSelect={handleSelect}>
					<Carousel.Item>
						<img className='d-block w-100' src={pic.images} alt='First slide' />
						<Carousel.Caption />
					</Carousel.Item>
				</Carousel>;
			})}
		</div>
	);
}
