import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  iuserevent,
  uploadRating,
  landmarkInfo,
  landmarkDetails,
} from '../../api';
import firebase from 'firebase';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
// import Rating from '@material-ui/lab/Rating';
import SimpleRating from '../../rating/Dashboard';
// import Ratings from '../../components/Ratings';
import ReactStars from 'react-rating-stars-component';
import { Modal } from '@material-ui/core';
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
  const [value, setValue] = useState(3);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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

  useEffect(() => {
    (async () => {
      var uid = firebase.auth().currentUser.uid;
      const event = await iuserevent(uid);
      const landmark = await landmarkDetails();
      console.log(landmark);
      console.log(event);
      if (landmark) {
        event.map((e) => {
          landmark.map((l) => {
            console.log(l);
            e.locationLink = `http://www.google.com/maps/place/${l.location.lat},${l.location.long}`;
          });
        });
      }
      // event.map(async (e) => {
      //   // const data = await landmarkInfo();
      //   // const location = data.location;
      //   console.log(data);
      //   // e.locationLink = `http://www.google.com/maps/place/${data.lat},${data.long}`;
      //   // console.log(e.landmarkLink);
      // });
      setState({ data: event });
    })();
  }, []);

  if (state.data !== false) {
    return (
      <div style={{ padding: '5px' }}>
        {state.data.map((d) => (
          <Card style={{ margin: '5vh' }}>
            {/* {(async () => {
              const response = await landmarkInfo(d.landmark);
              console.log(response);
            })()} */}
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
                <a href='#' onClick={() => window.open(`${d.locationLink}`)}>
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
                      <Typography component='legend'>Give Ratings :</Typography>
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
                      <LinkPopOver data={d} />
                    </>
                  );
                }
              })()}
            </CardContent>
          </Card>
        ))}
      </div>
    );
  } else {
    return <h1 style={{ height: '100vh', color: 'white' }}>No record Found</h1>;
  }
};

export default MyEvents;
