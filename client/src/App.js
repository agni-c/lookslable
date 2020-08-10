import React from 'react';
import AdminApp from './admin/App';
import Iuser from './I_User/components/App';
import Puser from './P_User/components/App';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import axios from 'axios';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Iuser} />
        <Route exact path='/admin' component={AdminApp} />
        <Route exact path='/puser' component={Puser} />
      </Switch>
    </Router>
  );
};

export default App;
