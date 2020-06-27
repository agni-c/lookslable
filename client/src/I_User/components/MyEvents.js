import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card } from "react-bootstrap";
import { iuserevent } from "../../api";
const MyEvents = () => {
	const [state, setState] = useState({ data: [] });
	// const api = async () => {
	// 	const response = await axios
	// 		.get(
	// 			"http://localhost:5000/spring-internship/us-central1/app/api/iuserevent"
	// 		)
	// 		.then(function (response) {
	// 			return response;
	// 		});

	// 	var data = Object.values(response.data);
	// 	setState(data[0]);
	// 	console.log(state.bookingdate);
	// };

	useEffect(() => {
		(async () => {
			const event = await iuserevent();
			setState({ data: event });
		})();
	}, []);
	return (
		<h1>
			Hello
			{console.log("State Here=>", state.data)}
		</h1>
	);
};

export default MyEvents;
