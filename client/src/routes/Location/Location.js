import React from 'react';
import './Location.css';
import Add from './Add/Add';
import SubmitLocationImages from './SubmitLocationImages/SubmitLocationImages';
import {
  BrowserRouter,
  Route,
  Link,
  Switch,
  HashRouter,
  Router,
} from 'react-router-dom';
import EditLocationRender from './EditLocation/EditLocationRender';
import StyledCard from '../../components/Card/StyledCard';
import UploadedImagesRender from '../UploadedImages/UploadedImages';
import HeroMain from '../../P_User/components/HeroMain';
import { Button } from 'react-bootstrap';
class Location extends React.Component {
  HomeData = () => {
    return (
      <>
        <div className='center-bt'>
          <h1>Location</h1>
        </div>

        <div className='backButton'>
          <Link to='/puser'>
            <Button variant='outline-primary'>Go Back</Button>
          </Link>
        </div>
        <div className='grid2-container'>
          <Link to='/puser/location/add' style={{ textDecoration: 'none' }}>
            <StyledCard name='Add' content='Lorem Lorem' />
          </Link>
          <Link
            to='/puser/location/submit-location-images'
            style={{ textDecoration: 'none' }}
          >
            <StyledCard name='Submit Images' content='Lorem Lorem' />
          </Link>
          <Link
            to='/puser/location/edit-location'
            style={{ textDecoration: 'none' }}
          >
            <StyledCard name='Edit Location' content='Lorem Lorem' />
          </Link>
          <Link
            to='/puser/location/uploded-images'
            style={{ textDecoration: 'none' }}
          >
            <StyledCard name='Uploaded Images' content='Lorem Lorem' />
          </Link>
        </div>
      </>
    );
  };
  componentDidMount() {
    console.log('hi');
  }
  render() {
    return (
      <div className='content'>
        <BrowserRouter>
          <Switch>
            <Route path='/puser/location' exact component={this.HomeData} />
            <Route path='/puser/location/add' exact component={Add} />
            <Route
              path='/puser/location/submit-location-images'
              exact
              component={SubmitLocationImages}
            />
            <Route
              path='/puser/location/edit-location'
              exact
              component={EditLocationRender}
            />
            <Route
              path='/puser/location/uploded-images'
              exact
              component={UploadedImagesRender}
            />

            <Route path='/puser' exact component={HeroMain} />
            {/* <Route
            path="/user/location/submit-location-images"
            exact
            component={MyBookings}
          />
          <Route
            path="/user/location/edit-location"
            exact
            component={Support}
          />
          <Route
            path="/user/uploaded-images"
            exact
            component={UploadedImages}
          /> */}
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
export default Location;
