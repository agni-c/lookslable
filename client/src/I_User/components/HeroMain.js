import React, { useState, useEffect } from 'react';
// import  from "react";
import { Tabs, Tab } from 'react-bootstrap';
import Gallery from './Gallery';
import MyEvents from './MyEvents';
import './styles.css';
import Forms from './Form/Forms';
import firebase from 'firebase';
import { postIuserProfile } from '../../api';

export default function HeroMain() {
  const [key, setKey] = useState('myLocation');

  useEffect(() => {
    (() => {
      postIuserProfile();
    })();
  });

  return (
    <div>
      <Tabs
        id='controlled-tab-example'
        activeKey={key}
        onSelect={(k) => setKey(k)}
      >
        <Tab eventKey='myLocation' title='My Location'>
          <Forms />
        </Tab>
        <Tab eventKey='popular' title='Popular'>
          <Gallery />
        </Tab>
        {/* <Tab eventKey="myEvents" title="My Events">
					<MyEvents />
				</Tab> */}
      </Tabs>
      {console.log('main', key)}
    </div>
  );
}
