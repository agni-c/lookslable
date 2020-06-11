import React from "react";
import { Button } from "react-bootstrap";
import Gallery from "../../components/Gallery/GalleryTesting/App";
import Location from "../Location/Location";

import {
  BrowserRouter,
  Route,
  Link,
  Switch,
  HashRouter,
  Router,
} from "react-router-dom";
const UploadedImagesRender = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/user/location" exact component={Location} />

          <Route path="/user/location/uploded-images">
            <div className="backButton">
              <Link to="/user/location">
                <Button variant="outline-primary">Go Back</Button>
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
