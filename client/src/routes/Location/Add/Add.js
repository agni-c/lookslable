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
import { Button } from 'react-bootstrap';
const Add = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/puser/location' exact component={Location} />

        <Route path='/puser/location/add'>
          <div className='backButton'>
            <Link to='/puser/location'>
              <Button variant='outline-primary'>Go Back</Button>
            </Link>
          </div>
          <SampleForm />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Add;
