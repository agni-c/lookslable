import React, { useState, useEffect } from 'react';
// import  from "react";
import { Tabs, Tab } from 'react-bootstrap';
import Gallery from './Gallery';
import MyEvents from './MyEvents';
import './styles.css';
import Forms from './Form/Forms';
import firebase from 'firebase';

export default function HeroMain() {
  const [key, setKey] = useState('popular');

  useEffect(() => {
    firebase.auth().onAuthStateChanged(async function (user) {
      if (user) {
        const profile = {
          name: user.displayName,
          email: user.email,
          photoURL: user.photoURL,
          uid: user.uid,
          tags: [],
        };
        const options = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify(profile),
        };
        console.log(profile);

        try {
          await fetch(
            `http://localhost:5000/spring-internship/us-central1/app/api/profile/iuser/${
              firebase.auth().currentUser.uid
            }`,
            options
          );
        } catch (error) {
          console.log(error);
        }
      }
    });
  });

  return (
    <div>
      <Tabs
        id='controlled-tab-example'
        activeKey={key}
        onSelect={(k) => setKey(k)}
      >
        <Tab eventKey='popular' title='Popular'>
          <Gallery />
        </Tab>
        <Tab eventKey='myLocation' title='My Location'>
          <Forms />
        </Tab>
        <Tab eventKey='myEvents' title='My Events'>
          <MyEvents />
        </Tab>
      </Tabs>
      {console.log('main', key)}
    </div>
  );
}
