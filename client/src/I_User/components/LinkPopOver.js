import React, { useState, useEffect } from 'react';
import { bookingDetails } from '../../api';
import { Button, Popover, Typography } from '@material-ui/core';

const LinkPopOver = (props) => {
  const [data, setdata] = useState(props.data);
  const [bookingData, setBookingData] = useState('');
  const [state, setState] = useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
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

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  const hideLinks = () => {
    setState(false);
  };
  useEffect(async () => {
    const booking = await bookingDetails();
    booking.map((b) => {
      if (b.iuid === data.iuid) {
        setLink1(b.link);
      }
    });
  }, []);
  return (
    <div>
      <Button
        style={{ backgroundColor: '#ed3181', color: '#fff', height: '40px' }}
        variant='contained'
        onClick={handleClick}
      >
        Links
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <h3>Link: {link1}</h3>
      </Popover>
    </div>
  );
};

export default LinkPopOver;
