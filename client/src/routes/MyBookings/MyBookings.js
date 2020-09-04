import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  puserevent,
  uploadDriveLink,
  getIuserProfile,
  iUserAdmin,
  landmarkInfo,
  custompuserevent,
  uploadDriveLinkCustombooking,
} from '../../api';
import firebase from 'firebase';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { CircularProgress } from '@material-ui/core';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});
// const MyBookings = () => {
//   let history = useHistory();
//   function clickHandler() {
//     history.push("/puser");
//   }

const MyBookings = () => {
  const classes = useStyles();
  const [state, setState] = useState({ data: [], loading: true });
  const [customState, setCustomState] = useState({ data: [], loading: true });
  const [driveLink, setDriveLink] = useState('');
  // const [puid, setPuid] = useState('');
  // const [time, setTime] = useState('');
  // const [iuid, setIuid] = useState('');
  // const [bookingDate, setBookingDate] = useState('');
  // const api = async () => {
  // 	const response = await axios
  // 		.get(
  // 			"http://localhost:5000/spring-internship/us-central1/app/api/iuserevent"
  // 		)
  // 		.then(function (response) {
  // 			return response;
  // 		});

  // 	var data = Object.values(response.data);
  // 	setState(data[0]);
  // 	console.log(state.bookingdate);
  // };

  const handleDriveLink = (iuid, puid, time, bookingdate) => {
    (async () => {
      if (driveLink === '') {
        toast('Enter Drivelink!');
      } else {
        await uploadDriveLink(iuid, puid, time, bookingdate, driveLink);
        toast('Successfully Submited');
      }
    })();
  };
  const handleCustomDriveLink = (iuid, puid, date) => {
    (async () => {
      if (driveLink === '') {
        toast('Enter Drivelink!');
      } else {
        await uploadDriveLinkCustombooking(iuid, puid, date, driveLink);
        toast('Successfully Submited');
      }
    })();
  };

  useEffect(() => {
    (async () => {
      var uid = firebase.auth().currentUser.uid;
      const event = await puserevent(uid);
      const idata = await iUserAdmin();
      console.log(event);
      idata.map((i) => {
        console.log(i);
        if (event !== false) {
          event.map((e) => {
            if (e.iuid === i.uid) {
              e.iname = i.name;
            }
          });
        }
      });
      setState({ data: event, loading: false });
    })();
    (async () => {
      var uid = firebase.auth().currentUser.uid;
      const customEvent = await custompuserevent(uid);
      const idata = await iUserAdmin();
      console.log(customEvent);
      idata.map((i) => {
        console.log(i);
        if (customEvent !== false) {
          customEvent.map((e) => {
            if (e.iuid === i.uid) {
              e.iname = i.name;
            }
          });
        }
      });
      setCustomState({ data: customEvent, loading: false });
    })();
  }, []);
  // if (state.data || customState.data) {
  return (
    <div style={{ height: '90vh' }}>
      <div style={{ margin: '25px 0' }}>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <p style={{ color: '#ed3181', fontSize: '25px' }}>Bookings</p>
        </div>
        {state.loading ? (
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <CircularProgress style={{ color: '#ed3181' }} />
          </div>
        ) : state.data !== false ? (
          state.data.map((d) => (
            <>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Card style={{ marginTop: '25px' }}>
                  <CardContent>
                    <Typography variant='h5' component='h2'>
                      {d.landmark}
                    </Typography>
                    <Typography>Booking Date: {d.bookingdate}</Typography>
                    <Typography>Booking Time: {d.time}</Typography>
                    <Typography>Iuser: {d.iname}</Typography>
                    <Typography>Number of User: {d.numberOfUsers}</Typography>
                    <Typography>Price: {d.price}</Typography>
                    <Typography>Phone No: {d.phoneNo}</Typography>
                    <Typography>
                      Drive Link: <a href={d.driveLink}>{d.driveLink} </a>
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <input
                      type='text'
                      onChange={(e) => {
                        setDriveLink(e.target.value);
                      }}
                    />

                    <Button
                      variant='contained'
                      onClick={() =>
                        handleDriveLink(d.iuid, d.puid, d.time, d.bookingdate)
                      }
                      style={{
                        width: 'auto',
                        height: '40px',
                        color: '#fff',
                        backgroundColor: '#ed3181',
                      }}
                    >
                      Upload Drive Link
                    </Button>
                  </CardActions>
                </Card>
              </div>
            </>
          ))
        ) : (
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <p style={{ color: '#fff' }}>No Bookings Found</p>
          </div>
        )}
        {/* {state.data === false ? (
          <h1 style={{ color: '#ed3181' }}>Bookings</h1>
        ) : (
          <h1 style={{ color: '#ed3181' }}>No Bookings</h1>
        )} */}
      </div>
      <div style={{ margin: '25px 0' }}>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <p style={{ color: '#ed3181', fontSize: '25px' }}>Custom Bookings</p>
        </div>
        {customState.loading ? (
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <CircularProgress style={{ color: '#ed3181' }} />
          </div>
        ) : customState.data !== false ? (
          customState.data.map((d) => (
            <>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Card style={{ marginTop: '25px' }}>
                  <CardContent>
                    <Typography>Address: {d.address}</Typography>
                    <Typography>Booking Date: {d.date}</Typography>
                    <Typography>Iuser: {d.iname}</Typography>

                    <Typography>
                      Plan: {d.key1} {d.key2}
                    </Typography>
                    <Typography>Phone No: {d.PhoneNo}</Typography>
                    <Typography>
                      Drive Link: <a href={d.driveLink}>{d.driveLink} </a>
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <input
                      type='text'
                      onChange={(e) => {
                        setDriveLink(e.target.value);
                      }}
                    />

                    <Button
                      variant='contained'
                      onClick={() =>
                        handleCustomDriveLink(d.iuid, d.puid, d.date)
                      }
                      style={{
                        width: 'auto',
                        height: '40px',
                        color: '#fff',
                        backgroundColor: '#ed3181',
                      }}
                    >
                      Upload Drive Link
                    </Button>
                  </CardActions>
                </Card>
              </div>
            </>
          ))
        ) : (
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <p style={{ color: '#fff' }}>No Custom Bookings Found</p>
          </div>
        )}
      </div>
      <ToastContainer />
    </div>
  );
  // } else {
  //   return <h1>No Booking Found</h1>;
  // }
};

export default MyBookings;
