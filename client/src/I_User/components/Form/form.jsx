import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Badge } from '@material-ui/core';
import { Form, Button, Col } from 'react-bootstrap';
import { customBooking, mylocation } from '../../../api';
import { toast, ToastContainer } from 'react-toastify';
import firebase from 'firebase';
import VideoPlan from './VideoPlan';
import PhotoPlan from './PhotoPlan';
import { css } from 'glamor';
import {
  LocationDataContext,
  LocationDataProvider,
} from '../../../context/Iuser/locationData';
import Camera from '../../../assets/ar-camera.png';
import Video from '../../../assets/video-camera.png';
// import Video from '../../../assets/checkmark.svg';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function Forms() {
  const [date, setDate] = useState('');
  const [details, setDetails] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNo, setPhoneNo] = useState('');
  const [location, setLocation] = useState({
    lat: '',
    lon: '',
  });
  const [key1, setKey1] = useState('Video');
  const [key2, setKey2] = useState('Basic');
  const [locationData, setLocationData] = useState('');
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = useState(0);

  window.navigator.geolocation.getCurrentPosition(
    (position) => {
      setLocation({
        lat: position.coords.latitude,
        lon: position.coords.longitude,
      });
    },
    (err) => console.log(err)
  );

  const handleChange = (event, newValue) => {
    if (newValue === 0) {
      setKey1('Video');
      setValue(newValue);
    } else if (newValue === 1) {
      setKey1('Photo');
      setValue(newValue);
    }
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  const validateDate = (date) => {
    var currentdate = new Date().toISOString().substring(0, 16);

    if (Date.parse(date) - Date.parse(currentdate) <= 0) {
      return false;
    } else if (currentdate.substring(8, 10) === date.substring(8, 10)) {
      return false;
    } else {
      return true;
    }
  };

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

  const keyHandler = (key) => {
    console.log(key);
    if (key === 0) {
      setKey2('Basic');
    } else if (key === 1) {
      setKey2('Premium');
    }
  };

  const dateHandler = (value) => {
    setDate(value);
  };

  const detailsHandler = (value) => {
    setDetails(value);
  };

  const addressHandler = (value) => {
    setAddress(value);
    console.log(address);
  };
  const phoneNoHandler = (value) => {
    setPhoneNo(value);
  };

  const handleSubmit = () => {
    console.log(
      'Clicked ' +
        address +
        ' ' +
        phoneNo +
        ' ' +
        date +
        ' ' +
        details +
        ' ' +
        key1 +
        ' ' +
        key2
    );
    if (address === '' || phoneNo === '' || date === '' || details === '') {
      toast('Please Enter All Credentials', {
        position: 'top-right',
        backgroundColor: '#ed3181',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        className: css({
          background: '#ed3181 !important',
          color: 'red !important',
          fontWeight: 'bold',
        }),
      });
    } else if (validateDate(date) === false) {
      toast('Please Enter Valid Date', {
        position: 'top-right',
        backgroundColor: '#ed3181',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        className: css({
          background: '#ed3181 !important',
          color: 'red !important',
          fontWeight: 'bold',
        }),
      });
    } else if (validatePhoneNumber(phoneNo) === false) {
      toast('Please Enter Valid Phone Number', {
        position: 'top-right',
        backgroundColor: '#ed3181',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        className: css({
          background: '#ed3181 !important',
          color: 'red !important',
          fontWeight: 'bold',
        }),
      });
    } else {
      (async () => {
        console.log(location);
        const response = await customBooking(
          address,
          phoneNo,
          date,
          location.lat,
          location.lon,
          key1,
          key2,
          details,
          firebase.auth().currentUser
        );
        if (response.data === true) {
          toast('Booked Successfully', {
            position: 'top-right',
            backgroundColor: '#ed3181',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            className: css({
              background: '#ed3181 !important',
              color: 'red !important',
              fontWeight: 'bold',
            }),
          });
        }
      })();
    }
  };

  return (
    <LocationDataProvider>
      <Form>
        <div
          className={classes.root}
          style={{ width: '100%', backgroundColor: '#222831' }}
        >
          <AppBar position='static' color='default'>
            <Tabs
              value={value}
              onChange={handleChange}
              indicatorColor='primary'
              textColor='primary'
              variant='fullWidth'
              aria-label='full width tabs example'
            >
              <Tab label='Video' {...a11yProps(0)} />
              <Tab label='Photo' {...a11yProps(1)} />
            </Tabs>
          </AppBar>
          <SwipeableViews
            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
            index={value}
            onChangeIndex={handleChangeIndex}
          >
            <TabPanel value={value} index={0} dir={theme.direction}>
              <>
                <Form.Group
                  controlId='formGridAddress1'
                  style={{ color: 'white' }}
                >
                  <Form.Label>Address</Form.Label>
                  <Form.Control
                    onChange={(e) => {
                      setAddress(e.target.value);
                    }}
                    className='colApp'
                    placeholder='1234 Main St'
                  />
                </Form.Group>
                <Form.Group
                  controlId='formGridPhoneNo1'
                  style={{ color: 'white' }}
                >
                  <Form.Label>Phone No</Form.Label>
                  <Form.Control
                    className='colApp'
                    type='number'
                    placeholder='+91 '
                    onChange={(e) => {
                      phoneNoHandler(e.target.value);
                    }}
                  />
                </Form.Group>
                <Form.Group
                  controlId='formGridDate1'
                  style={{ color: 'white' }}
                >
                  <Form.Label>Date</Form.Label>
                  <Form.Control
                    className='colApp'
                    type='dateTime-local'
                    placeholder='Date'
                    onChange={(e) => {
                      dateHandler(e.target.value);
                    }}
                  />
                </Form.Group>
                <Form.Group
                  controlId='formGridAddress1'
                  style={{ color: 'white' }}
                >
                  <Form.Label>Details</Form.Label>
                  <Form.Control
                    onChange={(e) => {
                      detailsHandler(e.target.value);
                    }}
                    className='colApp'
                    placeholder='Details'
                  />
                  <div
                    className='tabs-content'
                    style={{
                      marginTop: '50px',
                      display: 'flex',
                      justifyContent: 'center',
                    }}
                  >
                    <VideoPlan keyHandler={keyHandler} />
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <Button
                      style={{
                        backgroundColor: '#ed3181',
                        height: '40px',
                        marginBottom: '50px',
                        border: 'none',
                      }}
                      onClick={handleSubmit}
                    >
                      Submit
                    </Button>
                  </div>
                </Form.Group>
              </>
            </TabPanel>
            <TabPanel value={value} index={1} dir={theme.direction}>
              <>
                <Form.Group
                  controlId='formGridAddress2'
                  style={{ color: 'white' }}
                >
                  <Form.Label>Address</Form.Label>
                  <Form.Control
                    onChange={(e) => {
                      addressHandler(e.target.value);
                    }}
                    className='colApp'
                    placeholder='1234 Main St'
                  />
                </Form.Group>
                <Form.Group
                  controlId='formGridPhoneNo2'
                  style={{ color: 'white' }}
                >
                  <Form.Label>Phone No</Form.Label>
                  <Form.Control
                    onChange={(e) => {
                      phoneNoHandler(e.target.value);
                    }}
                    className='colApp'
                    placeholder='+91 '
                  />
                </Form.Group>
                <Form.Group
                  controlId='formGridDate2'
                  style={{ color: 'white' }}
                >
                  <Form.Label>Date</Form.Label>
                  <Form.Control
                    onChange={(e) => {
                      dateHandler(e.target.value);
                    }}
                    className='colApp'
                    type='dateTime-local'
                    placeholder='Date'
                  />
                </Form.Group>
                <Form.Group
                  controlId='formGridAddress1'
                  style={{ color: 'white' }}
                >
                  <Form.Label>Details</Form.Label>
                  <Form.Control
                    onChange={(e) => {
                      detailsHandler(e.target.value);
                    }}
                    className='colApp'
                    placeholder='Details'
                  />
                </Form.Group>
                <div
                  className='tabs-content'
                  style={{
                    marginTop: '50px',
                    display: 'flex',
                    justifyContent: 'center',
                  }}
                >
                  <PhotoPlan keyHandler={keyHandler} />
                </div>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <Button
                    style={{
                      backgroundColor: '#ed3181',
                      height: '40px',
                      marginBottom: '50px',
                      border: 'none',
                    }}
                    onClick={handleSubmit}
                  >
                    Submit
                  </Button>
                </div>
              </>
            </TabPanel>
          </SwipeableViews>
        </div>
        {/* <ToastContainer /> */}
      </Form>
    </LocationDataProvider>
  );
}
