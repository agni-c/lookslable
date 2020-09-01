import React from 'react';
import { useHistory } from 'react-router-dom';
import {
  Paper,
  makeStyles,
  Typography,
  TextField,
  Button,
} from '@material-ui/core';
import { Form, Col, Row } from 'react-bootstrap';
import { useState } from 'react';
import { updatePuserProfile } from '../../../api';
import firebase from 'firebase';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './styles.css';
const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(100),
      height: theme.spacing(100),
    },
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    // justifyContent: 'space-between',
    marginTop: '20px',
  },
  input: {
    marginTop: '20px',
    width: '400px',
  },
}));

const PuserForm = (props) => {
  const history = useHistory();
  const [phoneNumber, setPhoneNumber] = useState('');
  const [city, setCity] = useState('');
  const [address, setAddress] = useState('');
  const [driveLink, setDriveLink] = useState('');
  const classes = useStyles();

  const validatePhoneNumber = (number) => {
    console.log(number);
    const local = number.slice(0, 2);
    console.log(local);
    if (number.length === 12 && local === '91') {
      return true;
    } else if (number.length === 10) {
      return true;
    }
    return false;
  };

  const handleSubmit = () => {
    if (
      phoneNumber === '' ||
      city === '' ||
      address === '' ||
      driveLink === ''
    ) {
      toast('Enter All Credentials');
    } else if (validatePhoneNumber(phoneNumber) === false) {
      toast('Enter Valid Phone Number');
    } else {
      props.handleProfile();
      updatePuserProfile(
        phoneNumber,
        city,
        address,
        driveLink,
        firebase.auth().currentUser.uid
      );
      toast('Successfully Submited');
    }
  };
  return (
    <div className={classes.root}>
      <Paper
        elevation={3}
        style={{ backgroundColor: '#222831', marginTop: '100px' }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '50px',

            color: '#fff',
          }}
        >
          <h3 style={{ marginTop: '25px', marginBottom: '25px' }}>
            Please Fill up the details
          </h3>
        </div>
        <form className={classes.form} style={{ width: '100%' }}>
          <div style={{ margin: '0 auto' }}>
            <Form.Group as={Row} style={{ width: '100%', marginLeft: '55px' }}>
              <Form.Label
                style={{
                  color: '#ed3181',
                  fontSize: '18px',
                  marginLeft: '15px',
                }}
              >
                Phone Number
              </Form.Label>
              <Col sm='8'>
                <Form.Control
                  type='text'
                  name='Phone Number'
                  placeholder='Phone Number'
                  style={{ width: '300px' }}
                  onChange={(e) => {
                    setPhoneNumber(e.target.value);
                  }}
                />
              </Col>
              <br />
              <br />
              {/* </div> */}
            </Form.Group>
            <Form.Group as={Row} style={{ width: '100%', marginLeft: '55px' }}>
              <Form.Label
                style={{
                  color: '#ed3181',
                  fontSize: '20px',
                  marginRight: '85px',
                  marginLeft: '15px',
                }}
              >
                City
              </Form.Label>
              <Col sm='8'>
                <Form.Control
                  type='text'
                  style={{ width: '300px' }}
                  name='City'
                  placeholder='City'
                  onChange={(e) => {
                    setCity(e.target.value);
                  }}
                />
              </Col>
              <br />
              <br />
            </Form.Group>
            <Form.Group as={Row} style={{ width: '100%', marginLeft: '55px' }}>
              <Form.Label
                className='Address'
                style={{
                  color: '#ed3181',
                  fontSize: '20px',
                  marginRight: '50px',
                  marginLeft: '15px',
                }}
              >
                Address
              </Form.Label>
              <Col sm='8'>
                <Form.Control
                  type='text'
                  style={{ width: '300px' }}
                  name='Address'
                  placeholder='Address'
                  onChange={(e) => {
                    setAddress(e.target.value);
                  }}
                />
              </Col>
              <br />
              <br />
            </Form.Group>
            <Form.Group as={Row} style={{ width: '100%', marginLeft: '55px' }}>
              <Form.Label
                style={{
                  color: '#ed3181',
                  fontSize: '20px',
                  marginRight: '45px',
                  marginLeft: '15px',
                }}
              >
                Drivelink
              </Form.Label>
              <Col sm='8'>
                <Form.Control
                  type='text'
                  style={{ width: '300px' }}
                  name='Drivelink'
                  placeholder='Previous Work Drivelink'
                  onChange={(e) => {
                    setDriveLink(e.target.value);
                  }}
                />
              </Col>
              <br />
              <br />
            </Form.Group>
          </div>
          <Button
            variant='contained'
            onClick={handleSubmit}
            style={{
              color: '#fff',
              backgroundColor: '#ed3181',
              height: '40px',
              width: 'auto',
              marginTop: '25px',
            }}
          >
            Submit
          </Button>
        </form>
      </Paper>
      <ToastContainer />
    </div>
  );
};

export default PuserForm;
