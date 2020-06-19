import React, { useReducer, useState } from "react";
import { SET_PUSER } from "./../action.types";
import puserContext from "./puserContext";
import axios from "axios";
import PuserReducer from "./puserReducer";

const PuserState = ({ children }) => {
	//Initial State
	const [puser, setPuser] = useState({
		data: {},
		columns: [
			{ title: "UUID", field: "uuid" },
			{ title: "PUID", field: "puid" },
			{ title: "Landmark", field: "landmark" },
			{ title: "Price", field: "price" },
		],
	});

	//Setup reducer hook
	const [state, dispatch] = useReducer(PuserReducer, puser);
	//set puser
	const setPuserData = async () => {
		const response = await axios.get(
			"http://localhost:5000/spring-internship/us-central1/app/api/admin/puserprofile"
		);
		console.log(response.data);
		dispatch({ type: SET_PUSER, payload: response.data });
	};
	return (
		//Provider to app level state
		<puserContext.Provider value={{ data: puser, setPuserData }}>
			{children}
		</puserContext.Provider>
	);
};

export default PuserState;
