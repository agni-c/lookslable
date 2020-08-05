// import React from 'react';
// import { useHistory } from 'react-router-dom';
// import { Button } from 'react-bootstrap';
// const MyBookings = () => {
//   let history = useHistory();
//   function clickHandler() {
//     history.push('/puser');
//   }
//   return (
//     <>
//       <Button onClick={clickHandler}>Go Back</Button>
//       <h1>This is MyBookings</h1>
//     </>
//   );
// };

// export default MyBookings;
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
  const [state, setState] = useState({ data: [] });
  const [customState, setCustomState] = useState({ data: [] });
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
      console.log(iuid + ' ' + puid + ' ' + time + ' ' + bookingdate);
      await uploadDriveLink(iuid, puid, time, bookingdate, driveLink);
    })();
  };
  const handleCustomDriveLink = (iuid, puid, date) => {
    (async () => {
      await uploadDriveLinkCustombooking(iuid, puid, date, driveLink);
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
        event.map((e) => {
          if (e.iuid === i.uid) {
            e.iname = i.name;
          }
        });
      });
      setState({ data: event });
    })();
    (async () => {
      var uid = firebase.auth().currentUser.uid;
      const customEvent = await custompuserevent(uid);
      const idata = await iUserAdmin();
      console.log(customEvent);
      idata.map((i) => {
        console.log(i);
        customEvent.map((e) => {
          if (e.iuid === i.uid) {
            e.iname = i.name;
          }
        });
      });
      setCustomState({ data: customEvent });
    })();
  }, []);
  if (state.data || customState.data) {
    return (
      <>
        <div>
          {state.data.map((d) => (
            <>
              {/* {const data = await getIuserProfile(d.puid);}       */}

              <Card style={{ margin: '5vh' }}>
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
                    size='small'
                    onClick={() =>
                      handleDriveLink(d.iuid, d.puid, d.time, d.bookingdate)
                    }
                    style={{ width: '200px' }}
                  >
                    Upload Drive Link
                  </Button>
                  {/* <Button size='small'>Give Rating</Button> */}
                </CardActions>
              </Card>
            </>
          ))}
        </div>
        <div>
          {customState.data.map((d) => (
            <>
              {/* {const data = await getIuserProfile(d.puid);}       */}

              <Card style={{ margin: '5vh' }}>
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
                    size='small'
                    onClick={() =>
                      handleCustomDriveLink(d.iuid, d.puid, d.date)
                    }
                    style={{ width: '200px' }}
                  >
                    Upload Drive Link
                  </Button>
                  {/* <Button size='small'>Give Rating</Button> */}
                </CardActions>
              </Card>
            </>
          ))}
        </div>
      </>
    );
  } else {
    return <h1>Hello</h1>;
  }
};

export default MyBookings;
