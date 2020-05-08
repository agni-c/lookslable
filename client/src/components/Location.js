import React from "react";
import { Button, Badge } from "react-bootstrap";
class Location extends React.Component {
  constructor(props) {
    super(props);
    this.state = { lat: null, long: null };
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          lat: position.coords.latitude,
          long: position.coords.longitude,
        });
      },
      (err) => console.log(err)
    );
  }
  render() {
    return (
      <>
        <h4>
          <Badge variant="success">Latitude:{this.state.lat}</Badge>{" "}
        </h4>
        <h4>
          <Badge variant="success">Longitude:{this.state.long}</Badge>{" "}
        </h4>
      </>
    );
  }
}

export default Location;
