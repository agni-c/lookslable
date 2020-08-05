import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  iuserevent,
  uploadRating,
  landmarkInfo,
  landmarkDetails,
  customiuserevent,
  uploadLinkIuser,
  uploadRatingCustomBooking,
  uploadLinkIuserCustom,
} from '../../api';
import firebase from 'firebase';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import ReactStars from 'react-rating-stars-component';
import { Modal, TextField, CircularProgress } from '@material-ui/core';
import LinkPopOver from './LinkPopOver';

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

const MyEvents = () => {
  const classes = useStyles();
  const [state, setState] = useState({ data: [] });
  const [loader, setLoader] = useState(true);
  const [customLoader, setCustomLoader] = useState(true);
  const [customState, setCustomState] = useState({ data: [] });
  const [value, setValue] = useState(3);
  const [link, setLink] = useState('');
  const [open, setOpen] = React.useState(false);
  const [event, setEvent] = useState(true);
  const [customEvent, setCustomEvent] = useState(true);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const linkHandler = (bookingdate, time, iuid) => {
    (async () => {
      await uploadLinkIuser(bookingdate, time, iuid, link);
    })();
    setLink('');
  };
  const customLinkHandler = (date, puid, iuid) => {
    (async () => {
      await uploadLinkIuserCustom(date, puid, iuid, link);
    })();
    setLink('');
  };

  useEffect(() => {
    (async () => {
      var uid = firebase.auth().currentUser.uid;
      const event = await iuserevent(uid);
      const landmark = await landmarkDetails();
      // console.log(landmark);
      // console.log(event);

      if (landmark && event) {
        event.map((e) => {
          landmark.map((l) => {
            // console.log(l);
            e.locationLink = `http://www.google.com/maps/place/${l.location.lat},${l.location.long}`;
          });
        });
        setLoader(false);
      } else {
        setEvent(false);
      }
      setState({ data: event });
    })();
    (async () => {
      var uid = firebase.auth().currentUser.uid;
      const customEvent = await customiuserevent(uid);
      const landmark = await landmarkDetails();
      // console.log(landmark);
      console.log(customEvent);
      if (customEvent !== false) {
        customEvent.map((e) => {
          landmark.map((l) => {
            // console.log(l);
            e.locationLink = `http://www.google.com/maps/place/${l.location.lat},${l.location.long}`;
          });
        });
        setCustomLoader(false);
      } else {
        setCustomEvent(false);
      }
      setCustomState({ data: customEvent });
    })();
  }, []);

  if (state.data !== false && event) {
    return (
      <>
        <h4 style={{ marginLeft: '5vh', color: '#fff', marginTop: '10px' }}>
          Events
        </h4>
        <div style={{ padding: '5px' }}>
          {state.data ? (
            loader ? (
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <CircularProgress
                  style={{
                    color: '#ed3181',
                  }}
                />
              </div>
            ) : (
              state.data.map((d) => (
                <Card style={{ margin: '5vh' }}>
                  <CardContent>
                    <Typography variant='h5' component='h2'>
                      {d.landmark}
                    </Typography>
                    <Typography>Booking Date: {d.bookingdate}</Typography>
                    <Typography>Booking Time: {d.time}</Typography>
                    <Typography>Number of User: {d.numberOfUsers}</Typography>
                    <Typography>Price: {d.price}</Typography>
                    <Typography style={{}}>
                      Link:{' '}
                      <a
                        href='#'
                        onClick={() => window.open(`${d.locationLink}`)}
                      >
                        Location
                      </a>
                    </Typography>
                    <Typography>
                      Drive Link: <a href={d.driveLink}>{d.driveLink}</a>
                    </Typography>

                    {(() => {
                      if (d.driveLink === 'NO') {
                      } else {
                        return (
                          <>
                            <Typography component='legend'>
                              Give Ratings :
                            </Typography>
                            <ReactStars
                              value={d.rating}
                              edit={d.rating ? false : true}
                              size={50}
                              half={false}
                              onChange={(newRating) => {
                                console.log(
                                  d.iuid +
                                    ' ' +
                                    d.puid +
                                    ' ' +
                                    d.time +
                                    ' ' +
                                    newRating +
                                    ' ' +
                                    d.bookingdate
                                );
                                uploadRating(
                                  d.iuid,
                                  d.puid,
                                  d.time,
                                  d.bookingdate,
                                  newRating
                                );
                              }}
                            />
                            <TextField
                              id='outlined-basic'
                              label='Links'
                              variant='outlined'
                              value={link}
                              onChange={(e) => {
                                setLink(e.target.value);
                              }}
                            />

                            <Button
                              variant='contained'
                              onClick={() =>
                                linkHandler(d.bookingdate, d.time, d.iuid)
                              }
                              style={{
                                margin: '20px',
                                backgroundColor: '#ed3181',
                                color: '#fff',
                                height: '40px',
                              }}
                            >
                              Upload
                            </Button>
                            <LinkPopOver data={d} />
                          </>
                        );
                      }
                    })()}
                  </CardContent>
                </Card>
              ))
            )
          ) : (
            <h1 style={{ color: '#fff', textAlign: 'center' }}>
              No Booking Found
            </h1>
          )}
        </div>
        <h4 style={{ marginLeft: '5vh', color: '#fff' }}>Custom Events</h4>
        <div style={{ padding: '5px' }}>
          {customState.data ? (
            customLoader ? (
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <CircularProgress
                  style={{
                    color: '#ed3181',
                  }}
                />
              </div>
            ) : (
              customState.data.map((d) => (
                <Card style={{ margin: '5vh' }}>
                  <CardContent>
                    <Typography variant='h5' component='h2'>
                      {d.landmark}
                    </Typography>
                    <Typography>Booking Date: {d.date}</Typography>
                    <Typography>
                      Plan: {d.key1} {d.key2}
                    </Typography>
                    <Typography style={{}}>
                      Link:{' '}
                      <a
                        href='#'
                        onClick={() => window.open(`${d.locationLink}`)}
                      >
                        Location
                      </a>
                    </Typography>
                    <Typography>
                      Drive Link: <a href={d.driveLink}>{d.driveLink}</a>
                    </Typography>

                    {(() => {
                      if (d.driveLink === 'NO') {
                      } else {
                        return (
                          <>
                            <Typography component='legend'>
                              Give Ratings :
                            </Typography>
                            <ReactStars
                              value={d.rating}
                              edit={d.rating ? false : true}
                              size={50}
                              half={false}
                              onChange={(newRating) => {
                                console.log(
                                  d.iuid +
                                    ' ' +
                                    d.puid +
                                    ' ' +
                                    d.time +
                                    ' ' +
                                    newRating +
                                    ' ' +
                                    d.bookingdate
                                );
                                uploadRatingCustomBooking(
                                  d.iuid,
                                  d.puid,
                                  d.date,
                                  newRating
                                );
                              }}
                            />
                            <TextField
                              id='outlined-basic'
                              label='Links'
                              variant='outlined'
                              value={link}
                              onChange={(e) => {
                                setLink(e.target.value);
                              }}
                            />

                            <Button
                              variant='contained'
                              onClick={() =>
                                customLinkHandler(d.date, d.puid, d.iuid)
                              }
                              style={{
                                margin: '20px',
                                backgroundColor: '#ed3181',
                                color: '#fff',
                                height: '40px',
                              }}
                            >
                              Upload
                            </Button>
                            <LinkPopOver data={d} />
                          </>
                        );
                      }
                    })()}
                  </CardContent>
                </Card>
              ))
            )
          ) : (
            <h1 style={{ color: '#fff', textAlign: 'center' }}>
              No Custom Bookings
            </h1>
          )}
        </div>
      </>
    );
  } else if (state.data === undefined || customState.data === undefined) {
    return <h1 style={{ height: '100vh', color: 'white' }}>No record Found</h1>;
  }
};

export default MyEvents;
