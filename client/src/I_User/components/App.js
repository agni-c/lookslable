import React, { useState } from 'react';
import './styles.css';
import firebase from 'firebase';
import { Navbar, Button, Nav, Container } from 'react-bootstrap';
import SignInScreen from '../components/firebase';
import NavBar from './NavBar';
import HeroMain from './HeroMain';
import { ToastContainer } from 'react-toastify';

export default function App() {
  // return <SignInScreen />;
  // const [showSignIn, setShowSignIn] = useState(false);
  // const [showLogoutBtn, setShowLogoutBtn] = useState(false);
  // const signInHandler = () => {
  // 	setShowLogoutBtn(true);
  // 	setShowSignIn(true);
  // };
  return (
    <div style={{ width: '100%', height: '100%', backgroundColor: '#222831' }}>
      <SignInScreen />
      <ToastContainer />
    </div>
  );
}
