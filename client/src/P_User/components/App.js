import React from 'react';
import { Button, Dropdown } from 'react-bootstrap';
import SignInScreen from '../../firebase';
import './main.css';
import { ToastContainer } from 'react-toastify';

export default function App() {
  return (
    <div style={{ width: '100%', height: '100vh', backgroundColor: '#222831' }}>
      <SignInScreen />
    </div>
  );
}
