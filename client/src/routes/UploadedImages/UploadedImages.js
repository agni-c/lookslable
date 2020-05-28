import React from "react";
import { useHistory } from "react-router-dom";
import { Button } from "react-bootstrap";
import Gallery from "../../components/Gallery/GalleryTesting/App";
const UploadedImagesRender = () => {
  let history = useHistory();
  function clickHandler() {
    history.push("/user/location");
  }
  return (
    <>
      <Button onClick={clickHandler}>Go Back</Button>
      <Gallery />
    </>
  );
};

export default UploadedImagesRender;
