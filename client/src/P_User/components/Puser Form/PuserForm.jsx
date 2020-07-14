import React from 'react';
import { useHistory } from 'react-router-dom';
import {
  Paper,
  makeStyles,
  Typography,
  TextField,
  Button,
} from '@material-ui/core';
import { useState } from 'react';
import { updatePuserProfile } from '../../../api';
import firebase from 'firebase';
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginTop: '100px',
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

  const handleSubmit = () => {
    props.handleProfile();
    updatePuserProfile(
      phoneNumber,
      city,
      address,
      driveLink,
      firebase.auth().currentUser.uid
    );
  };
  return (
    <div className={classes.root}>
      <Paper elevation={3}>
        <Typography variant='h5'>Fill up the details</Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <TextField
            className={classes.input}
            id='outlined-basic'
            label='Phone Number'
            variant='outlined'
            onChange={(e) => {
              setPhoneNumber(e.target.value);
            }}
          />
          <TextField
            className={classes.input}
            id='outlined-basic'
            label='City'
            variant='outlined'
            onChange={(e) => {
              setCity(e.target.value);
            }}
          />
          <TextField
            className={classes.input}
            id='outlined-basic'
            label='Address'
            variant='outlined'
            onChange={(e) => {
              setAddress(e.target.value);
            }}
          />
          <TextField
            className={classes.input}
            id='outlined-basic'
            label='Previous Work Drive Link'
            variant='outlined'
            onChange={(e) => {
              setDriveLink(e.target.value);
            }}
          />
          <Button variant='contained' type='submit'>
            Submit
          </Button>
        </form>
      </Paper>
    </div>
  );
};

export default PuserForm;
