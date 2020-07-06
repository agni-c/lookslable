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
import React, { useState, useEffect } from "react";
import axios from "axios";
import { puserevent, uploadDriveLink } from "../../api";
import firebase from "firebase";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
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
  const [driveLink, setDriveLink] = useState("");
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
      await uploadDriveLink(iuid, puid, time, bookingdate, driveLink);
    })();
  };

  useEffect(() => {
    (async () => {
      var uid = firebase.auth().currentUser.uid;
      const event = await puserevent(uid);
      console.log(event);
      setState({ data: event });
    })();
  }, []);
  if (state.data) {
    return (
      <>
        {state.data.map((d) => (
          <Card style={{ margin: "5vh" }}>
            <CardContent>
              <Typography variant="h5" component="h2">
                Landmark: {d.landmark}
              </Typography>
              <Typography>Booking Date: {d.bookingdate}</Typography>
              <Typography>Booking Time: {d.time}</Typography>
              <Typography>Number of User: {d.numberOfUsers}</Typography>
              <Typography>Price: {d.price}</Typography>
            </CardContent>
            <CardActions>
              <input
                type="text"
                onChange={(e) => {
                  setDriveLink(e.target.value);
                }}
              />

              <Button
                size="small"
                onClick={() =>
                  handleDriveLink(d.iuid, d.puid, d.time, d.bookingdate)
                }
              >
                Upload Drive Link
              </Button>
              {/* <Button size='small'>Give Rating</Button> */}
            </CardActions>
          </Card>
        ))}
      </>
    );
  } else {
    return <h1>Hello</h1>;
  }
};

export default MyBookings;
