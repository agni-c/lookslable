import React from "react";
import ReactDom from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import App from "./I_User/components/App";
import { BrowserRouter as Router } from "react-router-dom";

ReactDom.render(
	<Router>
		<App />
	</Router>,
	document.getElementById("root")
);
