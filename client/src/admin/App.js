import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  browserHistory,
} from 'react-router-dom';
import Dashboard from './Dashboard';
import Login from './Login';
import axios from 'axios';
import { PuserAdminProvider } from '../context/pUserAdmin';
import { BookingsAdminProvider } from '../context/bookingsAdmin';
import { IuserAdminProvider } from '../context/iUserAdmin';
import { LandmarkAdminProvider } from '../context/landmarkAdmin';
import { ApprovedPhotoAdminProvider } from '../context/approvedPhotosAdmin';
import { CustomBookingsAdminProvider } from '../context/customBookingAdmin';
import { CustomBookingsPremiumAdminProvider } from '../context/customBookingsPremiumAdmin';
import './App.css';
import { MyLocationAdminProvider } from '../context/myLocationAdmin';

const AdminApp = () => {
  return (
    <Switch>
      <Router>
        <div className='App'>
          <PuserAdminProvider>
            <IuserAdminProvider>
              <ApprovedPhotoAdminProvider>
                <LandmarkAdminProvider>
                  <BookingsAdminProvider>
                    <CustomBookingsPremiumAdminProvider>
                      <CustomBookingsAdminProvider>
                        <MyLocationAdminProvider>
                          <Route
                            exact
                            path='/admin/dashboard'
                            component={Dashboard}
                          />
                          {/* <Dashboard /> */}
                        </MyLocationAdminProvider>
                      </CustomBookingsAdminProvider>
                    </CustomBookingsPremiumAdminProvider>
                  </BookingsAdminProvider>
                </LandmarkAdminProvider>
              </ApprovedPhotoAdminProvider>
            </IuserAdminProvider>
          </PuserAdminProvider>
        </div>
        <Route exact path='/admin' component={Login} />
      </Router>
    </Switch>
  );
};

export default AdminApp;
