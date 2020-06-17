import React from "react";
import ReactDom from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import App from "./rating/App";
import AdminApp from "./admin/App";

import { BrowserRouter as Router } from "react-router-dom";

ReactDom.render(
	<Router>
		{/* <AdminApp /> */}
		<App />
	</Router>,
	document.getElementById("root")
);
