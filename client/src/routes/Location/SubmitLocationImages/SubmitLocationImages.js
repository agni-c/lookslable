import React, { useRef } from 'react';
import App from '../../../components/Forms/Form/App';
import { Button } from 'react-bootstrap';
import HeroMain from '../../../P_User/components/HeroMain';
import Location from '../Location';

import {
  BrowserRouter,
  Route,
  Link,
  Switch,
  HashRouter,
  Router,
} from 'react-router-dom';
class SubmitLocationImages extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path='/puser/location' exact component={Location} />

          <Route path='/puser/location/submit-location-images'>
            <div className='backButton'>
              <Link to='/puser/location'>
                <Button variant='outline-primary'>Go Back</Button>
              </Link>
            </div>
            <App />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default SubmitLocationImages;
