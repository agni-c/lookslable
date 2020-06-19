import React from "react";
import { useState, useEffect } from "react";
import {
	Carousel,
	Card,
	Button,
	Badge,
	Container,
	Row,
	Col,
} from "react-bootstrap";
import Landmark from "./Landmark";
import axios from "axios";
import PopOver from "./Popover/PopOver";
import "./styles.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
export default function Gallery() {
	const [index, setIndex] = useState(0);
	const [dataRecieved, setDataRecieved] = useState(false);
	const [data, setData] = useState([{}]);
	const [image, setImage] = useState([]);
	const [currLandmark, setCurrLandmark] = useState();

	const handleSelect = (selectedIndex, e) => {
		setIndex(selectedIndex);
	};
	//for grouping the landmarks

	function landmarksGrouper(list, getKey) {
		const map = new Map();
		list.forEach((item) => {
			const key = getKey(item);
			const arrayList = map.get(key);
			if (!arrayList) {
				map.set(key, [item]);
			} else {
				arrayList.push(item);
			}
		});
		return map;
	}
	let groupedLandmarks = landmarksGrouper(data, (data) => data.landmark);

	// console.log(groupedLandmarks);
	useEffect(() => {
		axios
			.get(
				"http://localhost:5000/spring-internship/us-central1/app/api/upload/allUsergallery"
			)
			.then((response) => {
				response.data.forEach((ele, index) => {
					setData((data) => [...data, ele]);
					setImage((image) => [...image, ele.images]);
				});
				setDataRecieved(true);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	const landmarkValues = [...groupedLandmarks.values()];

	const singleLandmark = landmarkValues.filter((ele, index) => {
		return ele.length == 1;
	});

	const multipleLandmarks = landmarkValues.filter((ele, index) => {
		return ele.length > 1;
	});

	const HomeData = () => {
		return (
			<>
				{dataRecieved &&
					data.map((ele, index) => {
						if (ele.images) {
							return (
								<>
									<br />
									<Card style={{ color: "black" }}>
										<Card.Title style={{ textAlign: "center" }}>
											{ele.landmark}
										</Card.Title>
										<Link to={`/${ele.landmark}`}>
											<Badge
												pill
												variant="success"
												style={{ width: "50%", cursor: "pointer" }}
												onClick={() => {
													setCurrLandmark(ele.landmark);
												}}>
												{ele.landmark}
											</Badge>{" "}
										</Link>

										<Card.Body>
											<Card.Img
												variant="top"
												src={ele.images}
												alt="something"
											/>
											<Card.Text>{ele.names}</Card.Text>
										</Card.Body>
									</Card>
									<br />
								</>
							);
						}
					})}
			</>
		);
	};
	return (
		<Router>
			<Route path="/" exact component={HomeData}></Route>
			<Route path="/:landmark">
				<Landmark rawData={data} landmark={currLandmark} />
			</Route>
		</Router>
	);
}
