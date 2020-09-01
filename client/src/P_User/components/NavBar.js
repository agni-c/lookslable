import React from 'react';
import './main.css';
import { Navbar, Button, Nav, Container } from 'react-bootstrap';
import firebase from 'firebase';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <>
      <Navbar
        collapseOnSelect
        expand='lg'
        bg='dark'
        variant='dark'
        style={{ height: '7vh' }}
      >
        <Link to='/puser'>
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
            <Link to='/puser/faq'>
              <Nav.Link
                href='#features'
                style={{ color: '#ed3181', fontSize: '20px' }}
              >
                FAQ
              </Nav.Link>
            </Link>
            <Link to='/puser/support'>
              <Nav.Link
                href='#pricing'
                style={{ color: '#ed3181', fontSize: '20px' }}
              >
                Support
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
