import { webCamScreenShot } from '../api';
import React, { Component } from 'react';
import Webcam from 'react-webcam';
import GeoLocation from './Location';
import firebase from 'firebase';
import { Button } from '@material-ui/core';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default class WebCam extends Component {
  constructor(props) {
    super(props);
    this.state = { screenshot: null };
  }
  videoConstraints = {
    width: 325,
    height: 325,
    facingMode: 'user',
  };

  async screenshot() {
    var image64 = this.refs.webcam.getScreenshot();
    const screenshot = { image64 };
    this.setState({ screenshot: screenshot });

    await webCamScreenShot(screenshot);

    toast('Selfie Captured');
  }
  render() {
    return (
      <div>
        <Webcam
          audio={false}
          ref='webcam'
          height={325}
          width={325}
          screenshotFormat='image/png'
          videoConstraints={this.videoConstraints}
        />
        <br />
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '20px',
          }}
        >
          <Button
            variant='contained'
            onClick={this.screenshot.bind(this)}
            style={{
              backgroundColor: '#ed3181',
              height: '40px',
              width: '150px',
              color: '#fff',
            }}
          >
            Capture Selfie
          </Button>
        </div>
        <ToastContainer />
        {this.state.screenshot ? null : null}
      </div>
    );
  }
}
