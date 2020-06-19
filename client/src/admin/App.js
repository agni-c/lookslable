import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect,
} from 'react-router-dom';
import Dashboard from './Dashboard';
import Login from './Login';
import axios from 'axios';
import { PuserAdminProvider } from '../context/pUserAdmin';
import { BookingsAdminProvider } from '../context/bookingsAdmin';
import { IuserAdminProvider } from '../context/iUserAdmin';
import { LandmarkAdminProvider } from '../context/landmarkAdmin';
import { ApprovedPhotoAdminProvider } from '../context/approvedPhotosAdmin';
import './App.css';

class AdminApp extends React.Component {
  render() {
    return (
      <Switch>
        <Router>
          <div className='App'>
            <PuserAdminProvider>
              <IuserAdminProvider>
                <ApprovedPhotoAdminProvider>
                  <LandmarkAdminProvider>
                    <BookingsAdminProvider>
                      {/* <Route
                        exact
                        path='/admin/dashboard'
                        component={Dashboard}
                      /> */}
                      <Dashboard />
                    </BookingsAdminProvider>
                  </LandmarkAdminProvider>
                </ApprovedPhotoAdminProvider>
              </IuserAdminProvider>
            </PuserAdminProvider>
            {/* <Redirect to='/login' /> */}
          </div>
          <Route exact path='/admin/login' component={Login} />
        </Router>
      </Switch>
    );
  }
}

export default AdminApp;
