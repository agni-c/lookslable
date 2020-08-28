import React, { useState } from 'react';
import { Form, Button, Col, Row, Toast } from 'react-bootstrap';
import WebCam from '../WebCam/WebCam';
import { webCamFormDATA } from '../../api';
import e from 'cors';

const SampleForm = (e) => {
  const [landmark, setLandmark] = useState('');
  const submitHandler = async () => {
    e.preventDefault();
    const formData = new FormData();
    formData.set('landmark', landmark);
    const config = {
      headers: {
        'content-type': 'multipart/form-data',
      },
    };
    await webCamFormDATA(formData, config);
  };
  const onLandmarkChange = (e) => {
    setLandmark(e.target.value);
    // console.log(value);
    // this.setState({ landmark: value });
  };
  return (
    <div className='contain' style={{ margin: '0 10px' }}>
      <form
        //REVIEW form link
        onSubmit={submitHandler}
        style
      >
        <Form.Group as={Row}>
          <Form.Label column sm='2' size='lg' for='landmark'>
            {' '}
            Landmark1
          </Form.Label>
          <Col sm='10'>
            <Form.Control
              type='text'
              name='landmark'
              placeholder='eg. lake gardens'
              onChange={onLandmarkChange}
              required
              id='landmark'
            />
          </Col>
          <br />
          <br />
        </Form.Group>

        <WebCam />
        <br />
        <br />

        <Button variant='outline-primary' className='mb-2' type='submit'>
          Upload
        </Button>
      </form>
    </div>
  );
};

export default SampleForm;
