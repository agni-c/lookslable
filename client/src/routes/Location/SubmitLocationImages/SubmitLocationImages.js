import React from "react";
import App from "../../../components/Forms/Form/App";
import { useHistory } from "react-router-dom";
import { Button } from "react-bootstrap";
const SubmitLocationImages = () => {
  let history = useHistory();
  function handleClick() {
    history.push("/user/location");
  }
  return (
    <>
      <Button onClick={handleClick}> Go Back</Button>
      <App />
    </>
  );
};

export default SubmitLocationImages;
