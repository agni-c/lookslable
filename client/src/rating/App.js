import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Dashboard from "./Dashboard";
import axios from "axios";

class AdminApp extends React.Component {
	render() {
		return (
			<div className="App">
				<Dashboard></Dashboard>
			</div>
		);
	}
}

export default AdminApp;
