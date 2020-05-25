import React, { Component } from "react";
import "./HeroMain.css";
import {
  BrowserRouter,
  Route,
  Link,
  Switch,
} from "react-router-dom";
import firebase from "firebase";
import Location from "../../routes/Location/Location";
import Support from "../../routes/Support/Support";
import UploadedImages from "../../routes/UploadedImages/UploadedImages";
import MyBookings from "../../routes/MyBookings/MyBookings";
import StyledCard from "../../components/Card/StyledCard";

import { Container } from "react-bootstrap";

class HeroMain extends Component {
  componentDidMount() {
    firebase
      .auth()
      .onAuthStateChanged(async function (user) {
        if (user) {
          const profile = {
            name: user.displayName,
            email: user.email,
            photoURL: user.photoURL,
            uid: user.uid,
            tags: [],
          };
          const options = {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
            body: JSON.stringify(profile),
          };
          console.log(profile);

          try {
            await fetch(
              `http://localhost:5000/spring-internship/us-central1/app/api/profile/${
                firebase.auth().currentUser.uid
              }`,
              options
            );
          } catch (error) {
            console.log(error);
          }
        }
      });
  }
  Homedata = () => {
    return (
      <>
        <Container className="center home-container">
          <h1 className="center-align">
            Welcome Photographer!
          </h1>
          <br />
          <div className="grid1-container">
            <Link
              to="/user/location"
              style={{
                textDecoration: "none",
                padding: "0 0 0 0 ",
              }}
            >
              <StyledCard
                name="Location"
                content="Lorem Lorem"
                className="grid-content"
              />
            </Link>
            <Link
              to="user/my-bookings"
              style={{ textDecoration: "none" }}
            >
              <StyledCard
                name="My Bookings"
                content="Lorem Lorem"
              />
            </Link>
            <Link
              to="user/uploaded-images"
              style={{ textDecoration: "none" }}
            >
              <StyledCard
                name="Drive Link"
                content="Lorem Lorem"
              />
            </Link>
            <Link
              to="user/support"
              style={{ textDecoration: "none" }}
            >
              <StyledCard
                name="Support"
                content="Lorem Lorem"
              />
            </Link>
          </div>
        </Container>
      </>
    );
  };

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={this.Homedata} />
          <Route
            path="/user/location"
            exact
            component={Location}
          />
          <Route
            path="/user/my-bookings"
            exact
            component={MyBookings}
          />
          <Route
            path="/user/support"
            exact
            component={Support}
          />
          <Route
            path="/user/uploaded-images"
            exact
            component={UploadedImages}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default HeroMain;
