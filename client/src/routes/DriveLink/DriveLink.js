import React from 'react';
// import App from "../../components/Gallery/GalleryTesting/App";
import './styles.css';
import { Jumbotron, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
const DriveLink = () => {
  let history = useHistory();
  function clickHandler() {
    history.push('/puser');
  }
  return (
    <>
      <div className='my-container'>
        <Button onClick={clickHandler}> Go Back</Button>
        <Jumbotron>
          <h1>History</h1>
          <p>Photographer</p>
          <p>
            <Button variant='primary'>Drive Link</Button>
          </p>
        </Jumbotron>
      </div>
    </>
  );
};

export default DriveLink;
