import React from "react";
import EditLocation from "../../../components/EditLocation/EditLocation";
import { useHistory } from "react-router-dom";
import { Button } from "react-bootstrap";
const EditLocationRender = () => {
  let history = useHistory();
  function clickHandler() {
    history.push("/user/location");
  }
  return (
    <>
      <Button onClick={clickHandler}> Go Back</Button>
      <EditLocation />
    </>
  );
};

export default EditLocationRender;
