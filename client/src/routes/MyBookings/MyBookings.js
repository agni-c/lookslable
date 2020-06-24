import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from 'react-bootstrap';
const MyBookings = () => {
  let history = useHistory();
  function clickHandler() {
    history.push('/puser');
  }
  return (
    <>
      <Button onClick={clickHandler}>Go Back</Button>
      <h1>This is MyBookings</h1>
    </>
  );
};

export default MyBookings;
