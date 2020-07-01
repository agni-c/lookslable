import React from "react";
import ReactDom from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
// import App from './rating/App';
import App from "./App";
import P_User from "./P_User/components/App"
import { BrowserRouter as Router } from "react-router-dom";

ReactDom.render(
	<Router>
		{/* <App /> */}
		<P_User/>
	</Router>,
	document.getElementById("root")
);
