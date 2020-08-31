import React from 'react';
import axios from 'axios';
import { Form, Col, Row, Toast, Container } from 'react-bootstrap';
import WebCam from './WebCam';
import firebase from 'firebase';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { landmarkFirestore, landmarkRealTime } from '../api';
import style from './style.css';
import { Button } from '@material-ui/core';

class SampleForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: '',
      long: '',
      price: '',
      landmark: '',
      date: '',
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
    toast('Successfully Submited');
  };
  landmarkHandler = (value) => {
    this.setState({ landmark: value });
  };
  priceHandler = (value) => {
    this.setState({ price: value });
  };

  dateHandler = (value) => {
    this.setState({ date: value });
  };

  validateDate = (date) => {
    var currentdate = new Date().toISOString().substring(0, 16);

    if (Date.parse(date) - Date.parse(currentdate) < 0) {
      return false;
    } else if (currentdate.substring(8, 10) === date.substring(8, 10)) {
      return false;
    } else {
      return true;
    }
  };

  submitHandler = async () => {
    console.log(this.state.long + ' ' + this.state.lat);
    if (
      this.state.landmark === '' ||
      this.state.price === '' ||
      this.state.date === ''
    ) {
      toast('Enter All Credentials');
    } else {
      let fieldData = {
        lat: this.state.lat,
        long: this.state.long,
        landmark: this.state.landmark,
        price: this.state.price,
        puid: this.state.puid,
      };

      await landmarkRealTime(fieldData);
      await landmarkFirestore(fieldData);

      toast('Successfully Submited');
    }
  };
  render() {
    return (
      <Container className='center home-container'>
        <div
          className='contain'
          style={{ height: '100%', backgroundColor: '#222831' }}
        >
          {/* <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              marginBottom: '25px',
            }}
          >
            <h1 className='center-align' style={{ color: '#ed3181' }}>
              Add Selfie
            </h1>
          </div> */}
          <form
          // action={`http://localhost:5000/spring-internship/us-central1/app/api/webcam/form/${
          //   firebase.auth().currentUser.uid
          // }`}
          // method="post"
          // enctype="multipart/form-data"
          >
            <Form.Group as={Row}>
              <Form.Label className='formGroup'>Landmark</Form.Label>
              <Col sm='8' className='landmark'>
                <Form.Control
                  type='text'
                  name='landmark'
                  placeholder='eg. lake gardens'
                  required
                  // style={{ width: '100px' }}
                  onChange={(event) => {
                    this.landmarkHandler(event.target.value);
                    console.log(event.target.value);
                  }}
                />
              </Col>
              <br />
              <br />
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label className='formGroup'>Price</Form.Label>
              <Col sm='8' className='price'>
                <Form.Control
                  // style={{ width: '100px' }}
                  as='select'
                  sm={10}
                  id='price'
                  name='price'
                  onChange={(event) => {
                    this.priceHandler(event.target.value);
                  }}
                >
                  <option value='149'>149</option>
                  <option value='249'>249</option>
                  <option value='499'>499</option>
                  <option value='999'>999</option>
                  <option value='999'>999</option>
                  <option value='1499'>1499</option>
                </Form.Control>
              </Col>
              <br />
              <br />
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label className='formGroup '>Date and Time</Form.Label>
              <Col sm='8' className='date'>
                <Form.Control
                  type='datetime-local'
                  id='time'
                  name='time'
                  onChange={(e) => {
                    this.dateHandler(e.target.value);
                  }}
                />
              </Col>
            </Form.Group>
            <Form.Group>
              <label
                class='location'
                style={{ color: '#ed3181', fontSize: '20px' }}
              >
                <input type='radio' name='location' value='Indoor' /> Indoor
                <br />
                <input type='radio' name='location' value='Outdoor' /> Outdoor
                <br />
              </label>
            </Form.Group>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <WebCam />
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                marginTop: '30px',
              }}
            >
              <Button
                variant='contained'
                style={{
                  backgroundColor: '#ed3181',
                  height: '50px',
                  width: '100px',
                  color: '#fff',
                }}
                onClick={(event) => {
                  event.preventDefault();
                  this.submitHandler();
                }}
              >
                Upload
              </Button>
            </div>
            <br />

            <ToastContainer />
          </form>
        </div>
      </Container>
    );
  }
}

export default SampleForm;
