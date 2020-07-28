import React, { useState, useEffect } from 'react';
import { bookingDetails } from '../../api';
import { Button, Popover, Typography, Paper } from '@material-ui/core';

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
      if (
        b.bookingdate === data.bookingdate &&
        b.time === data.time &&
        b.iuid === data.iuid
      ) {
        setLink1(b.link1);
        setLink2(b.link2);
        setLink3(b.link3);
        setLink4(b.link4);
        setLink5(b.link5);
        setLink6(b.link6);
        setLink7(b.link7);
        setLink8(b.link8);
        setLink9(b.link9);
        setLink10(b.link10);
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
        <Paper
          elevation={2}
          style={{ height: 'auto', width: 'auto', textAlign: 'center' }}
        >
          <a href={link1}>{link1}</a>
          <br />
          <a href={link2}>{link2}</a> <br />
          <a href={link3}>{link3}</a> <br />
          <a href={link4}>{link4}</a> <br />
          <a href={link5}>{link5}</a> <br />
          <a href={link6}>{link6}</a> <br />
          <a href={link7}>{link7}</a> <br />
          <a href={link8}>{link8}</a> <br />
          <a href={link9}>{link9}</a> <br />
          <a href={link10}>{link10}</a> <br />
        </Paper>
      </Popover>
    </div>
  );
};

export default LinkPopOver;
