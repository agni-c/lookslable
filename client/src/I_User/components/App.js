import React, { useState } from "react";
import "./styles.css";
import firebase from "firebase";
import { Navbar, Button, Nav, Container } from "react-bootstrap";
import SignInScreen from "../components/firebase";
import NavBar from "./NavBar";
import HeroMain from "./HeroMain";

export default function App() {
	// return <SignInScreen />;
	// const [showSignIn, setShowSignIn] = useState(false);
	// const [showLogoutBtn, setShowLogoutBtn] = useState(false);
	// const signInHandler = () => {
	// 	setShowLogoutBtn(true);
	// 	setShowSignIn(true);
	// };
	return (
		<>
			<SignInScreen />
		</>
	);
}
