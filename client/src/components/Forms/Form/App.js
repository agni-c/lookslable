import React, { useEffect, useState } from 'react';
import '../../style.css';
import Upload from './Upload';
import axios from 'axios';
import { Container, Form, Col, Row } from 'react-bootstrap';
import firebase from 'firebase';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getEditLocation, uploadFormDATA } from '../../../api';
import { Button } from '@material-ui/core';

const App = () => {
  const [landmarks, setLandmarks] = useState([]);
  const [file, setFile] = useState();
  const [currentLandmark, setCurrentLandmark] = useState('');
  const [formData, setFormData] = useState({
    landmark: '',
    upload: '',
  });

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log('Button Clicked');
    console.log(file);

    if (
      currentLandmark === '' ||
      file === '' ||
      file === undefined ||
      currentLandmark === 'default'
    ) {
      console.log('Toast Called');
      toast('Enter Valid Credentials');
    } else {
      const config = {
        headers: {
          'content-type': 'multipart/form-data',
        },
      };
      await uploadFormDATA(file, currentLandmark, config);

      toast('Successfully Submited');
    }
  };

  const onChange = (e) => {
    setFile(e.target.files[0]);
    console.log('Changedd');
  };
  const onLandmarkChange = (value) => {
    currentLandmarkUpdate(value);
    // console.log(value);
    // this.setState({ landmark: value });
  };
  const currentLandmarkUpdate = (value) => {
    console.log(value);
    setCurrentLandmark(value);
  };
  useEffect(() => {
    (async () => {
      const responce = await getEditLocation();

      const entries = Object.entries(responce.data);

      entries.map((ele, index) => {
        let land = ele[1].landmark;
        setLandmarks((landmarks) => [...landmarks, land]);
      });
    })();
  }, []);
  return (
    <Container className='center home-container'>
      <div
        className='contain'
        style={{
          height: '100%',
          backgroundColor: '#222831',
          marginTop: '50px',
        }}
      >
        {/* <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginBottom: '25px',
        }}
      >
        <h1 className='center-align' style={{ color: '#ed3181' }}>
          Add Selfie
        </h1>
      </div> */}
        <form>
          <Form.Group as={Row}>
            <Form.Label className='formGroup'>Select Image </Form.Label>
            <Col sm='10'>
              <input
                style={{ color: '#fff' }}
                type='file'
                accept='image/*'
                id='upload'
                name='uploads'
                onChange={onChange}
                required
              />
            </Col>
            <br />
            <br />
          </Form.Group>
          <Form.Group as={Row}>
            <Form.Label className='formGroup'> Landmark</Form.Label>
            <Col sm='10'>
              <Form.Control
                style={{ overflow: 'hidden' }}
                as='select'
                name='landmark'
                required
                id='landmark'
                onChange={(e) => {
                  onLandmarkChange(e.target.value);
                }}
              >
                <option value='default'>Select Your Landmark</option>
                {landmarks.map((ele, index) => {
                  return <option value={ele}>{ele}</option>;
                })}
              </Form.Control>
            </Col>
            <br />
            <br />
          </Form.Group>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              marginTop: '30px',
            }}
          >
            <Button
              variant='contained'
              onClick={onSubmit}
              style={{
                height: '40px',
                backgroundColor: '#ed3181',
                color: '#fff',
              }}
            >
              Upload
            </Button>
          </div>
          <ToastContainer />
        </form>
      </div>
    </Container>
  );
};

export default App;
