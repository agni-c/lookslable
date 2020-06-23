import React from 'react';
import AdminApp from './admin/App';
import Iuser from './I_User/components/App';
import Puser from './P_User/components/App';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Button } from '@material-ui/core';

const App = () => {
  return (
    <Router>
      <Link to='/admin'>
        <Button>Admin</Button>
      </Link>
      <Link to='/iuser'>
        <Button>I USER</Button>
      </Link>
      <Link to='/puser'>
        <Button>P USER</Button>
      </Link>

      <Route path='/admin' component={AdminApp} />
      <Route path='/iuser' component={Iuser} />
      <Route path='/puser' component={Puser} />
    </Router>
  );
};

export default App;
