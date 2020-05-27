import React from "react";
import SampleForm from "../../../components/SampleForm";
import { useHistory } from "react-router-dom";
import { Button } from "react-bootstrap";
const Add = () => {
  let history = useHistory();
  function handleClick() {
    history.push("/user/location");
  }
  return (
    <>
      <Button onClick={handleClick}>Go Back</Button>
      <SampleForm />
    </>
  );
};

export default Add;
