import React, { useState } from 'react';
import './styles.css';
import {
  Navbar,
  Button,
  Nav,
  FormControl,
  Form,
  NavDropdown,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import firebase from 'firebase';
import SignInScreen from './firebase';
import Pozular from '../../assets/Pozular_logo.jpg';
function NavBar(props) {
  // const signInHandler = () => {
  // 	setShowSignIn(true);
  // };
  return (
    <>
      <Navbar
        collapseOnSelect
        expand='lg'
        bg='dark'
        variant='dark'
        style={{ height: '7vh' }}
      >
        <Link to='/'>
          <Navbar.Brand
            href='#home'
            style={{ fontSize: '24px', letterSpacing: '1px' }}
          >
            Pozular
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='mr-auto'>
            <Link to='/myevents'>
              <Nav.Link
                href='#features'
                style={{ color: '#ed3181', fontSize: '20px' }}
              >
                My Events
              </Nav.Link>
            </Link>
            <Link>
              <Nav.Link
                href='#features'
                style={{ color: '#ed3181', fontSize: '20px' }}
              >
                Support
              </Nav.Link>
            </Link>
            <Link>
              <Nav.Link
                href='#features'
                style={{ color: '#ed3181', fontSize: '20px' }}
              >
                FAQ
              </Nav.Link>
            </Link>
            <Link>
              <Nav.Link
                href='#pricing'
                style={{ color: '#ed3181', fontSize: '20px' }}
              >
                Contact us
              </Nav.Link>
            </Link>
          </Nav>
          <Button
            // variant='primary'
            style={{
              backgroundColor: '#cd236a',
              border: 'none',
              height: '40px',
            }}
            onClick={() => firebase.auth().signOut()}
            className='ml-sm-3 customBtn'
          >
            Logout
          </Button>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
export default NavBar;
