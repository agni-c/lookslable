import React from "react";
import { Button, Badge, Jumbotron, Card } from "react-bootstrap";
class GeoLocation extends React.Component {
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
        <Card>
          <p>Latitude:{this.state.lat} </p>
          Longitude:{this.state.long}
        </Card>
      </>
    );
  }
}

export default GeoLocation;
