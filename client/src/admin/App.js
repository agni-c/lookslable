import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Dashboard from './Dashboard';
import axios from 'axios';
import { PuserProvider } from './context/UserContext';
import './App.css';

class AdminApp extends React.Component {
  render() {
    return (
      <div className='App'>
        <PuserProvider>
          <Dashboard></Dashboard>
        </PuserProvider>
      </div>
    );
  }
}

export default AdminApp;
