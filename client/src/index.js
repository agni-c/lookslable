import React from "react";
import ReactDom from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import App from "./I_User/components/App";

ReactDom.render(
	<Router>
		<App />
	</Router>,
	document.getElementById("root")
);
