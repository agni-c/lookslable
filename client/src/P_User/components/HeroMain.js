import React, { Component, useEffect, useState } from 'react';
import './HeroMain.css';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import firebase from 'firebase';
import Location from '../../routes/Location/Location';
import Support from '../../routes/Support/Support';
import DriveLink from '../../routes/DriveLink/DriveLink';
import MyBookings from '../../routes/MyBookings/MyBookings';
import StyledCard from '../../components/Card/StyledCard';
import { Modal } from '@material-ui/core';
import PuserForm from './Puser Form/PuserForm';

import { Container } from 'react-bootstrap';
import { postPuserProfile, verifyPuserProfile } from '../../api';

const HeroMain = () => {
  useEffect(() => {
    (() => {
      postPuserProfile();

      (async () => {
        const profile = await verifyPuserProfile(
          firebase.auth().currentUser.uid
        );
        console.log(profile);
        setProfile(profile);
      })();
    })();
  }, []);
  const [profile, setProfile] = useState(true);
  const [open, setOpen] = React.useState(true);

  const handleProfile = () => {
    setProfile(!profile);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const Homedata = () => {
    return (
      <>
        <Container className='center home-container'>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              marginTop: '25px',
            }}
          >
            <h1 className='center-align' style={{ color: '#fff' }}>
              Welcome
            </h1>
            <h1 style={{ color: '#ed3181' }}>
              {firebase.auth().currentUser.displayName}!
            </h1>
          </div>
          <br />
          <div className='grid1-container'>
            <Link
              to='/puser/location'
              style={{
                textDecoration: 'none',
                padding: '0 0 0 0 ',
              }}
            >
              <StyledCard
                name='Location'
                content='Manage Location Here'
                className='grid-content'
              />
            </Link>
            <Link to='/puser/my-bookings' style={{ textDecoration: 'none' }}>
              <StyledCard name='My Bookings' content='Your Bookings' />
            </Link>
          </div>
        </Container>
      </>
    );
  };

  {
    if (!profile) {
      return (
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby='simple-modal-title'
          aria-describedby='simple-modal-description'
        >
          <PuserForm handleProfile={handleProfile} />
        </Modal>
      );
    } else {
      return (
        <BrowserRouter>
          <Switch>
            <Route path='/puser' exact component={Homedata} />
            <Route path='/puser/location' exact component={Location} />
            <Route path='/puser/my-bookings' exact component={MyBookings} />
            <Route path='/puser/support' exact component={Support} />
          </Switch>
        </BrowserRouter>
      );
    }
  }
};

export default HeroMain;
