import React from "react";
import ReactDom from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
// import App from './rating/App';
import App from "./App";

import { BrowserRouter as Router } from "react-router-dom";

ReactDom.render(
	<Router>
		<App />
	</Router>,
	document.getElementById("root")
);
