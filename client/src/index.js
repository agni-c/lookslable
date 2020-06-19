import React from "react";
import ReactDom from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import App from "./P_User/components/App";
import Appi from "./I_User/components/App";
import AdminApp from "./admin/App";

import { BrowserRouter as Router } from "react-router-dom";

ReactDom.render(
	<Router>
		{/* <AdminApp /> */}
		{/* <App /> */}
		<Appi />
	</Router>,
	document.getElementById("root")
);
