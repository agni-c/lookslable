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
import { Line } from 'react-chartjs-2';
import CountUp from 'react-countup';
import firebase from 'firebase';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import ReactStars from 'react-rating-stars-component';
import { Modal, TextField, CircularProgress, Dialog } from '@material-ui/core';
import LinkPopOver from './LinkPopOver';
import CustomLinkPopOver from './CustomLinkPopOver';
import { ToastContainer, toast } from 'react-toastify';

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
  const [openGraph, setGraphOpen] = React.useState(false);
  const [event, setEvent] = useState(true);
  const [customEvent, setCustomEvent] = useState(true);
  const [displayRating, setDisplayRating] = useState(false);
  const [link1, setLink1] = useState('');
  const [link2, setLink2] = useState('');
  const [link3, setLink3] = useState('');
  const [link4, setLink4] = useState('');
  const [link5, setLink5] = useState('');
  const [link6, setLink6] = useState('');
  const [link7, setLink7] = useState('');
  const [link8, setLink8] = useState('');
  const [link9, setLink9] = useState('');
  const [link10, setLink10] = useState('');
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: '',
        data: [],
        backgroundColor: [],
        borderWidth: '',
      },
    ],
  });

  const handleLinkData = (
    link1,
    link2,
    link3,
    link4,
    link5,
    link6,
    link7,
    link8,
    link9,
    link10
  ) => {
    setLink1(link1);
    setLink2(link2);
    setLink3(link3);
    setLink4(link4);
    setLink5(link5);
    setLink6(link6);
    setLink7(link7);
    setLink8(link8);
    setLink9(link9);
    setLink10(link10);
  };

  const handleGraphData = (
    date1,
    date2,
    date3,
    date4,
    date5,
    value1,
    value2,
    value3,
    value4,
    value5
  ) => {
    setChartData({
      labels: [date1, date2, date3, date4, date5],
      datasets: [
        {
          data: [value1, value2, value3, value4, value5],
          label: 'Audience',
          backgroundColor: ['rgba(48, 48, 48,0.6)'],
          borderWidth: 4,
        },
      ],
    });
  };

  const handleGraphOpen = () => {
    setGraphOpen(true);
  };

  const handleGraphClose = () => {
    setGraphOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const linkHandler = (bookingdate, time, iuid) => {
    (async () => {
      if (link === null || link === undefined || link === '') {
        toast.info('Please Enrter Link', {
          position: 'top-right',
          backgroundColor: '#ed3181',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      } else {
        const data = await uploadLinkIuser(bookingdate, time, iuid, link);
        if (data.data) {
          toast.info('Link Uploaded Successfully', {
            position: 'top-right',
            backgroundColor: '#ed3181',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
      }
    })();
    setLink('');
  };
  const customLinkHandler = (date, puid, iuid) => {
    (async () => {
      console.log(link);
      if (link === null || link === undefined || link === '') {
        toast.info('Please Enrter Link', {
          position: 'top-right',
          backgroundColor: '#ed3181',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      } else {
        const data = await uploadLinkIuserCustom(date, puid, iuid, link);
        console.log(data);
        if (data.data) {
          toast.info('Link Uploaded Successfully', {
            position: 'top-right',
            backgroundColor: '#ed3181',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
      }
    })();
    setLink('');
  };

  useEffect(() => {
    (async () => {
      var uid = firebase.auth().currentUser.uid;
      const event = await iuserevent(uid);
      const landmark = await landmarkDetails();
      // console.log(landmark);
      console.log(event);

      if (landmark && event) {
        event.map((e) => {
          landmark.map((l) => {
            console.log(l);
            e.locationLink = `http://www.google.com/maps/place/${l.location.lat},${l.location.lon}`;
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
            // e.locationLink = `http://www.google.com/maps/place/${l.location.lat},${l.location.long}`;
          });
        });
        setCustomLoader(false);
      } else {
        setCustomEvent(false);
      }
      setCustomState({ data: customEvent });
    })();
  }, []);

  if (state.data !== false || customState.data !== false) {
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
                        href='/myevents'
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
                            {d.rating ? (
                              <>
                                <TextField
                                  id='outlined-basic'
                                  label='Upload Another Link'
                                  variant='outlined'
                                  edit={d.rating ? false : true}
                                  value={link}
                                  onChange={(e) => {
                                    setLink(e.target.value);
                                  }}
                                />

                                {/* <div
                              style={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "flex-start",
                              }}
                            > */}
                                <Button
                                  // variant="contained"
                                  onClick={() =>
                                    linkHandler(d.bookingdate, d.time, d.iuid)
                                  }
                                  style={{
                                    margin: '20px',
                                    backgroundColor: '#ed3181',
                                    color: '#fff',
                                    height: '40px',
                                    width: 'auto',
                                  }}
                                >
                                  Upload Another Link
                                </Button>
                                <LinkPopOver data={d} />
                              </>
                            ) : null}
                            {/* </div> */}
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
                              style={{ display: ' None' }}
                              value={d.rating}
                              edit={!d.rating ? true : false}
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
                            {d.rating ? (
                              <>
                                <TextField
                                  id='outlined-basic'
                                  label='Upload Another Link'
                                  variant='outlined'
                                  disabled={d.link === 'NO' ? false : true}
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
                                    width: 'auto',
                                  }}
                                >
                                  Upload Another Link
                                </Button>
                                <br />
                                {d.key2 === 'Premium' ? (
                                  <>
                                    <Button
                                      variant='contained'
                                      style={{
                                        width: 'auto',
                                        height: '40px',
                                        color: '#fff',
                                        backgroundColor: '#ed3181',
                                      }}
                                      onClick={() => {
                                        handleGraphOpen();
                                        handleGraphData(
                                          d.date1,
                                          d.date2,
                                          d.date3,
                                          d.date4,
                                          d.date5,
                                          d.value1,
                                          d.value2,
                                          d.value3,
                                          d.value4,
                                          d.value5,
                                          d.agegroup,
                                          d.sex,
                                          d.location
                                        );
                                      }}
                                    >
                                      Promotion
                                    </Button>
                                    <Dialog
                                      open={openGraph}
                                      onClose={handleGraphClose}
                                      aria-labelledby='simple-modal-title'
                                      // overflow='scroll'
                                      aria-describedby='simple-modal-description'
                                    >
                                      <div
                                        style={{
                                          display: 'flex',
                                          justifyContent: 'center',
                                        }}
                                      >
                                        <Card
                                          style={{
                                            padding: '20px',
                                            height: 'auto',
                                            width: '800px',
                                            margin: '20px 10px 0 10px',
                                          }}
                                        >
                                          <div
                                            style={{
                                              display: 'flex',
                                              justifyContent: 'flex-end',
                                            }}
                                          >
                                            <Button
                                              variant='contained'
                                              onClick={handleGraphClose}
                                              style={{
                                                width: 'auto',
                                                height: '40px',
                                                color: '#fff',
                                                backgroundColor: '#ed3181',
                                              }}
                                            >
                                              Close
                                            </Button>
                                          </div>
                                          <Line
                                            data={chartData}
                                            options={{
                                              responsive: true,
                                              maintainAspectRatio: true,
                                            }}
                                          />
                                          <div
                                            style={{
                                              display: 'flex',
                                              flexDirection: 'column',
                                            }}
                                          >
                                            <div
                                              style={{
                                                display: 'flex',
                                                flexDirection: 'column',
                                                marginTop: '25px',
                                              }}
                                            >
                                              <p>
                                                AgeGroup:
                                                {d.agegroup}
                                              </p>
                                              <p>
                                                Sex:
                                                {d.sex}
                                              </p>
                                              <p>
                                                Location:
                                                {d.location}
                                              </p>
                                            </div>
                                          </div>
                                        </Card>
                                      </div>
                                    </Dialog>
                                  </>
                                ) : (
                                  <>
                                    <Button
                                      variant='contained'
                                      style={{
                                        width: 'auto',
                                        height: '40px',
                                        color: '#fff',
                                        backgroundColor: '#ed3181',
                                      }}
                                      onClick={() => {
                                        handleOpen();
                                        handleLinkData(
                                          d.link1,
                                          d.link2,
                                          d.link3,
                                          d.link4,
                                          d.link5,
                                          d.link6,
                                          d.link7,
                                          d.link8,
                                          d.link9,
                                          d.link10
                                        );
                                      }}
                                    >
                                      Links
                                    </Button>
                                    <Modal
                                      open={open}
                                      onClose={handleClose}
                                      aria-labelledby='simple-modal-title'
                                      // overflow='scroll'
                                      aria-describedby='simple-modal-description'
                                    >
                                      <div
                                        style={{
                                          display: 'flex',
                                          justifyContent: 'center',
                                        }}
                                      >
                                        <Card
                                          style={{
                                            padding: '20px',
                                            // height: 'auto',
                                            width: '800px',
                                            margin: '100px auto',
                                          }}
                                        >
                                          <div
                                            style={{
                                              display: 'flex',
                                              justifyContent: 'flex-end',
                                              marginBottom: '25px',
                                            }}
                                          >
                                            <Button
                                              variant='contained'
                                              onClick={handleClose}
                                              style={{
                                                width: 'auto',
                                                height: '40px',
                                                color: '#fff',
                                                backgroundColor: '#ed3181',
                                              }}
                                            >
                                              Close
                                            </Button>
                                          </div>
                                          {link1 === 'NO' ? null : (
                                            <>
                                              <a href={link1}>{link1}</a> <br />
                                            </>
                                          )}
                                          {link2 === 'NO' ? null : (
                                            <>
                                              <a href={link2}>{link2}</a> <br />
                                            </>
                                          )}
                                          {link3 === 'NO' ? null : (
                                            <>
                                              <a href={link3}>{link3}</a> <br />
                                            </>
                                          )}
                                          {link4 === 'NO' ? null : (
                                            <>
                                              <a href={link4}>{link4}</a> <br />
                                            </>
                                          )}
                                          {link5 === 'NO' ? null : (
                                            <>
                                              <a href={link5}>{link5}</a> <br />
                                            </>
                                          )}
                                          {link6 === 'NO' ? null : (
                                            <>
                                              <a href={link6}>{link6}</a> <br />
                                            </>
                                          )}
                                          {link7 === 'NO' ? null : (
                                            <>
                                              <a href={link7}>{link7}</a> <br />
                                            </>
                                          )}
                                          {link8 === 'NO' ? null : (
                                            <>
                                              <a href={link8}>{link8}</a> <br />
                                            </>
                                          )}
                                          {link9 === 'NO' ? null : (
                                            <>
                                              <a href={link9}>{link9}</a> <br />
                                            </>
                                          )}
                                          {link10 === 'NO' ? null : (
                                            <>
                                              <a href={link10}>{link10}</a>{' '}
                                              <br />
                                            </>
                                          )}
                                          {link1 === 'NO' &&
                                          link2 === 'NO' &&
                                          link3 === 'NO' &&
                                          link4 === 'NO' &&
                                          link5 === 'NO' &&
                                          link6 === 'NO' &&
                                          link7 === 'NO' &&
                                          link8 === 'NO' &&
                                          link9 === 'NO' &&
                                          link10 === 'NO' ? (
                                            <>
                                              <p>No Links Found</p> <br />
                                            </>
                                          ) : null}
                                        </Card>
                                      </div>
                                    </Modal>
                                  </>
                                )}
                                {/* <ToastContainer /> */}
                              </>
                            ) : null}
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
          <ToastContainer />
        </div>
      </>
    );
  } else {
    return <h1 style={{ height: '100vh', color: 'white' }}>No record Found</h1>;
  }
};

export default MyEvents;
