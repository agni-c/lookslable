import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Dashboard from "./Dashboard";
import axios from "axios";
import { PuserAdminProvider } from "../context/pUserAdmin";
import { BookingsAdminProvider } from "../context/bookingsAdmin";
import { IuserAdminProvider } from "../context/iUserAdmin";
import { LandmarkAdminProvider } from "../context/landmarkAdmin";
import { ApprovedPhotoAdminProvider } from "../context/approvedPhotosAdmin";
import "./App.css";

class AdminApp extends React.Component {
	render() {
		return (
			<div className="App">
				<PuserAdminProvider>
					<IuserAdminProvider>
						<ApprovedPhotoAdminProvider>
							<LandmarkAdminProvider>
								<BookingsAdminProvider>
									<Dashboard />
								</BookingsAdminProvider>
							</LandmarkAdminProvider>
						</ApprovedPhotoAdminProvider>
					</IuserAdminProvider>
				</PuserAdminProvider>
			</div>
		);
	}
}

export default AdminApp;
