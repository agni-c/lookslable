import React, { useState } from "react";
import { Card, Badge } from "react-bootstrap";

const Landmark = ({ rawData, landmark }) => {
	const [showLandmark, setShowLandmark] = useState([]);

	const currentLandmarks = rawData.filter((ele, index) => {
		return ele.landmark === landmark;
	});
	console.log(currentLandmarks);
	return (
		<>
			<br />
			{currentLandmarks.map((ele, index) => {
				return (
					<>
						<Card style={{ color: "black" }}>
							<Card.Title style={{ textAlign: "center" }}>
								{ele.landmark}
							</Card.Title>
							<Badge
								pill
								variant="success"
								style={{ width: "50%", cursor: "pointer" }}>
								{ele.landmark}
							</Badge>{" "}
							<Card.Body>
								<Card.Img variant="top" src={ele.images} alt="something" />

								<Card.Text>{ele.names}</Card.Text>
							</Card.Body>
						</Card>
						<br />
					</>
				);
			})}
		</>
	);
};

export default Landmark;
