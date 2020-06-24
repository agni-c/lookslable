import React from 'react';
import { Button } from 'react-bootstrap';
import Gallery from '../../components/Gallery/GalleryTesting/App';
import Location from '../Location/Location';

import {
  BrowserRouter,
  Route,
  Link,
  Switch,
  HashRouter,
  Router,
} from 'react-router-dom';
const UploadedImagesRender = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path='/puser/location' exact component={Location} />

          <Route path='/puser/location/uploded-images'>
            <div className='backButton'>
              <Link to='/puser/location'>
                <Button variant='outline-primary'>Go Back</Button>
              </Link>
            </div>
            <Gallery />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default UploadedImagesRender;
