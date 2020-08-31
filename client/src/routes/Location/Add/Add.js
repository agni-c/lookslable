import React from 'react';
import SampleForm from '../../../components/SampleForm';
import {
  BrowserRouter,
  Route,
  Link,
  Switch,
  HashRouter,
  Router,
} from 'react-router-dom';
import Location from '../Location';
import { Button } from '@material-ui/core';
const Add = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/puser/location' exact component={Location} />

        <Route path='/puser/location/add'>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              marginTop: '50px',
            }}
          >
            {/* <Link to='/puser/location'>
              <Button
                variant='contained'
                style={{
                  color: '#fff',
                  backgroundColor: '#ed3181',
                  height: '40px',
                  width: 'auto',
                }}
              >
                Go Back
              </Button>
            </Link> */}
            <SampleForm />
          </div>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Add;
