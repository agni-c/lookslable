import React from "react";
import EditLocation from "../../../components/EditLocation/EditLocation";
import Location from "../Location";
import {
  BrowserRouter,
  Route,
  Link,
  Switch,
  HashRouter,
  Router,
} from "react-router-dom";
import { Button } from "react-bootstrap";
const EditLocationRender = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/user/location" exact component={Location} />

        <Route path="/user/location/edit-location">
          <div className="backButton">
            <Link to="/user/location">
              <Button variant="outline-primary">Go Back</Button>
            </Link>
          </div>
          <EditLocation />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default EditLocationRender;
