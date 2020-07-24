import React from 'react';
import ReactDOM from 'react-dom';
import './popover.css';
import {
  Popover,
  OverlayTrigger,
  Overlay,
  Form,
  DropdownButton,
  Dropdown,
  ButtonGroup,
} from 'react-bootstrap';
import { Button } from '@material-ui/core';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import firebase from 'firebase';
import SignInScreen from './../firebase';
import { popUpShoot } from '../../../api';

class PopOver extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      no_of_users: '',
      phoneNo: '',
      date: '',
      iuid: firebase.auth().currentUser.uid,
      currentPuid: props.puid,
      landmark: props.landmark,
    };
  }

  phoneNoHandler = (value) => {
    this.setState({
      phoneNo: value,
    });
    console.log(this.state.phoneNo);
  };
  dateHandler = (value) => {
    this.setState({
      date: value,
    });
    console.log(value);
  };

  handleSubmit = async () => {
    console.log(this.state.phoneNo);
    console.log('LAndmark' + this.state.landmark);
    console.log(this.props);
    this.setState({ showState: false });
    const response = await popUpShoot(
      firebase.auth().currentUser,
      this.state.phoneNo,
      this.state.date,
      this.state.currentPuid,
      '350',
      this.state.no_of_users,
      this.state.landmark
    );
    if (response.data) {
      this.setState({ show: false });
      toast.info('Booked Successfully', {
        position: 'top-right',
        backgroundColor: '#ed3181',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      // this.setState({ show: false })}
      console.log('Successful');
    }
  };

  render() {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {/* <OverlayTrigger
          trigger='click'
          placement='top'
          overlay={this.popover}
          // rootCloseEvent='click'
          show={this.state.showState}
        >
          <Button
            variant='contained'
            style={{
              backgroundColor: '#ed3181',
              color: '#fff',
              height: '40px',
            }}
          >
            Shoot
          </Button>
        </OverlayTrigger> */}
        {/* <Button
          onClick={() => this.setState({ show: true })}
          ref={(button) => {
            this.target = button;
          }}
        >
          Click me!
        </Button> */}
        <Button
          onClick={() => this.setState({ show: true })}
          ref={(button) => {
            this.target = button;
          }}
          variant='contained'
          style={{
            backgroundColor: '#ed3181',
            color: '#fff',
            height: '40px',
          }}
        >
          Shoot
        </Button>

        <Overlay
          placement='top'
          show={this.state.show}
          target={ReactDOM.findDOMNode(this.target)}
        >
          <Popover id='example' title='Popover example'>
            <Popover.Title as='h3' style={{ color: '#ed3181' }}>
              Book Location
            </Popover.Title>
            <Popover.Content>
              <Form className='form-c'>
                <Form.Group controlId='formGridPhoneNo1'>
                  <Form.Label>Phone No</Form.Label>
                  <Form.Control
                    onChange={(e) => {
                      this.setState({ phoneNo: e.target.value });
                    }}
                    className='colApp'
                    type='number'
                    placeholder='+91 '
                  />
                </Form.Group>
                <Form.Group controlId='formGridDate1'>
                  <Form.Label>Date & Time</Form.Label>
                  <Form.Control
                    className='colApp'
                    type='dateTime-local'
                    placeholder='Date'
                    onChange={(e) => {
                      this.dateHandler(e.target.value);
                    }}
                  />
                </Form.Group>
                <Form.Group controlId='exampleForm.ControlSelect1'>
                  <Form.Label>No Of Users</Form.Label>
                  <Form.Control
                    as='select'
                    onChange={(e) => {
                      this.setState({
                        no_of_users: e.target.value,
                      });
                    }}
                  >
                    <option>1</option>
                    <option>2</option>

                    <option>5-6</option>
                  </Form.Control>
                </Form.Group>
                <Button
                  variant='contained'
                  style={{
                    backgroundColor: '#ed3181',
                    color: '#fff',
                    height: '40px',
                  }}
                  onClick={() => {
                    this.handleSubmit();
                  }}
                >
                  Book
                </Button>
              </Form>
            </Popover.Content>
            {/* <Button onClick={() => }>
              Close
            </Button> */}
          </Popover>
        </Overlay>
        <ToastContainer />
      </div>
    );
  }
}

export default PopOver;
