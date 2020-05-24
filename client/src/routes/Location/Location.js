import React from "react";
import "./Location.css";
import Add from "./Add/Add";
import SubmitLocationImages from "./SubmitLocationImages/SubmitLocationImages";
import {
  BrowserRouter,
  Route,
  Link,
  Switch,
} from "react-router-dom";
import EditLocation from "../../components/EditLocation/EditLocation";
import Gallery from "../../components/Gallery/GalleryTesting/App";
import StyledCard from "../../components/Card/StyledCard";
class Location extends React.Component {
  HomeData = () => {
    return (
      <div>
        <div className="center-bt">
          <h1>Location</h1>
        </div>
        <div className="grid2-container">
          <Link
            to="/user/location/add"
            style={{ textDecoration: "none" }}
          >
            <StyledCard name="Add" content="Lorem Lorem" />
          </Link>
          <Link
            to="/user/location/submit-location-images"
            style={{ textDecoration: "none" }}
          >
            <StyledCard
              name="Submit Images"
              content="Lorem Lorem"
            />
          </Link>
          <Link
            to="/user/location/edit-location"
            style={{ textDecoration: "none" }}
          >
            <StyledCard
              name="Edit Location"
              content="Lorem Lorem"
            />
          </Link>
          <Link
            to="/user/location/uploded-images"
            style={{ textDecoration: "none" }}
          >
            <StyledCard
              name="Uploaded Images"
              content="Lorem Lorem"
            />
          </Link>
        </div>
      </div>
    );
  };
  render() {
    return (
      <div className="content">
        <BrowserRouter>
          <Switch>
            <Route
              path="/user/location"
              exact
              component={this.HomeData}
            />
            <Route
              path="/user/location/add"
              exact
              component={Add}
            />
            <Route
              path="/user/location/submit-location-images"
              exact
              component={SubmitLocationImages}
            />
            <Route
              path="/user/location/edit-location"
              exact
              component={EditLocation}
            />
            <Route
              path="/user/location/uploded-images"
              exact
              component={Gallery}
            />
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
