import React from "react";
import { useHistory } from "react-router-dom";
import { Button } from "react-bootstrap";

const Support = () => {
  let history = useHistory();
  function clickHandler() {
    history.push("/");
  }
  return (
    <>
      <Button onClick={clickHandler}>Go Back</Button>
      <h1>This is Support</h1>
    </>
  );
};

export default Support;
