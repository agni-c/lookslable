import React from "react";
import axios from "axios";
import {
  Form,
  Button,
  Col,
  Row,
  Toast,
} from "react-bootstrap";
import WebCam from "./WebCam";
import firebase from "firebase";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class SampleForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: null,
      long: null,
      price: null,
      landmark: null,
      puid: firebase.auth().currentUser.uid,
    };
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
  testing = () => {
    toast("Successfully Submited");
  };
  landmarkHandler = (value) => {
    this.setState({ landmark: value });
  };
  priceHandler = (value) => {
    this.setState({ price: value });
  };
  test = () => <div>Testing</div>;
  submitHandler = () => {
    axios
      .post(
        "http://localhost:5000/spring-internship/us-central1/app/api/landmark",
        {
          lat: this.state.lat,
          long: this.state.long,
          landmark: this.state.landmark,
          price: this.state.price,
          puid: this.state.puid,
        }
      )
      .then(function (responce) {
        toast("Successfully Submited");
      })
      .catch(function (err) {
        console.log(err);
      });
  };
  showToast = () => {
    return <h1>Hi</h1>;
  };
  render() {
    return (
      <div className="contain">
        <form
          action={`http://localhost:5000/spring-internship/us-central1/app/api/webcam/form/${
            firebase.auth().currentUser.uid
          }`}
          method="post"
          enctype="multipart/form-data"
        >
          <Form.Group as={Row}>
            <Form.Label
              column
              sm="2"
              size="lg"
              for="landmark"
            >
              {" "}
              Landmark
            </Form.Label>
            <Col sm="10">
              <Form.Control
                type="text"
                name="landmark"
                placeholder="eg. lake gardens"
                required
                id="landmark"
                onChange={(event) => {
                  this.landmarkHandler(event.target.value);
                }}
              />
            </Col>
            <br />
            <br />
          </Form.Group>
          <Form.Group as={Row}>
            <Form.Label column sm={2} for="price">
              Price
            </Form.Label>
            <Col sm="10">
              <Form.Control
                as="select"
                sm={10}
                id="price"
                name="price"
                onChange={(event) => {
                  this.priceHandler(event.target.value);
                }}
              >
                <option value="149">149</option>
                <option value="249">249</option>
                <option value="499">499</option>
                <option value="999">999</option>
                <option value="999">999</option>
                <option value="1499">1499</option>
              </Form.Control>
            </Col>
            <br />
            <br />
          </Form.Group>
          <Form.Group as={Row}>
            <Form.Label column sm={3} for="time">
              Date and Time
            </Form.Label>
            <Col sm="9">
              <Form.Control
                type="datetime-local"
                id="time"
                name="time"
              />
            </Col>
          </Form.Group>
          <Form.Group>
            <label class="location">
              <input
                type="radio"
                name="location"
                value="Indoor"
              />{" "}
              Indoor
              <br />
              <input
                type="radio"
                name="location"
                value="Outdoor"
              />{" "}
              Outdoor
              <br />
            </label>
          </Form.Group>
          <WebCam />
          <br />
          <Button
            variant="outline-primary"
            className="mb-2"
            type="submit"
            onClick={(event) => {
              event.preventDefault();
              this.submitHandler();
            }}
          >
            Upload
          </Button>

          <ToastContainer />
        </form>
      </div>
    );
  }
}

export default SampleForm;
