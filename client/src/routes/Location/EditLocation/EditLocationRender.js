import React from 'react';
import EditLocation from '../../../components/EditLocation/EditLocation';
import Location from '../Location';
import {
  BrowserRouter,
  Route,
  Link,
  Switch,
  HashRouter,
  Router,
} from 'react-router-dom';
import { Button } from 'react-bootstrap';
const EditLocationRender = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/puser/location' exact component={Location} />

        <Route path='/puser/location/edit-location'>
          {/* <div className='backButton'>
            <Link to='/puser/location'>
              <Button variant='outline-primary'>Go Back</Button>
            </Link>
          </div> */}
          <EditLocation />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default EditLocationRender;
