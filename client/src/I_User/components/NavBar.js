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
import firebase from 'firebase';
import SignInScreen from './firebase';
import Pozular from '../../assets/Pozular_logo.jpg';
function NavBar(props) {
  // const signInHandler = () => {
  // 	setShowSignIn(true);
  // };
  return (
    <>
      {/* <Navbar
        sticky='top'
        bg='dark'
        variant='dark'
        expand='lg'
        className='margin-bt'
      >
        <Navbar.Brand href='#home'>Data Selfie App</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='mr-auto'>
            <Nav.Link href='#upload-photos'>View Photos</Nav.Link>
          </Nav>

          <Button
            variant='primary'
            onClick={() => firebase.auth().signOut()}
            className='ml-sm-3 customBtn'
          >
            Logout
          </Button>
        </Navbar.Collapse>
      </Navbar> */}
      {/* <Navbar bg='dark' variant='dark'>
        <Navbar.Brand href='#home'>Pozular</Navbar.Brand>
        <Nav className='mr-auto'>
          <Nav.Link href='#pricing'>My Events</Nav.Link>
          <Nav.Link href='#home'>Support</Nav.Link>
          <Nav.Link href='#features'>FAQ</Nav.Link>
          <Nav.Link href='#pricing'>Contact Us</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type='text' placeholder='Search' className='mr-sm-2' />
          <Button variant='outline-info'>Search</Button>
        </Form>
      </Navbar> */}
      <Navbar
        collapseOnSelect
        expand='lg'
        bg='dark'
        variant='dark'
        style={{ height: '7vh' }}
      >
        <Navbar.Brand
          href='#home'
          style={{ fontSize: '24px', letterSpacing: '1px' }}
        >
          Pozular
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='mr-auto'>
            <Nav.Link
              href='#features'
              style={{ color: '#ed3181', fontSize: '20px' }}
            >
              My Events
            </Nav.Link>
            <Nav.Link
              href='#features'
              style={{ color: '#ed3181', fontSize: '20px' }}
            >
              Support
            </Nav.Link>
            <Nav.Link
              href='#features'
              style={{ color: '#ed3181', fontSize: '20px' }}
            >
              FAQ
            </Nav.Link>
            <Nav.Link
              href='#pricing'
              style={{ color: '#ed3181', fontSize: '20px' }}
            >
              Contact us
            </Nav.Link>
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
