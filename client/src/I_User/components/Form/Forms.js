import React from 'react';
import { customBooking, mylocation } from '../../../api';
import { Tabs, Tab, Badge } from 'react-bootstrap';
import { Form, Button, Col } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import './form.css';
class Forms extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      price: '',
      key1: 'video',
      key2: 'basic',
      address: '',
      phoneNo: '',
      date: '',
      location: {
        lat: '',
        lon: '',
      },
      // time: "",
      details: '',
      locationData: {
        Video: {
          pprice: '',
          pfirst: '',
          psecond: '',
          pthird: '',
          bprice: '',
          bfirst: '',
          bsecond: '',
          bthird: '',
        },
        Photo: {
          pprice: '',
          pfirst: '',
          psecond: '',
          pthird: '',
          bprice: '',
          bfirst: '',
          bsecond: '',
          bthird: '',
        },
      },
    };

    {
      (async () => {
        const locationData = await mylocation();
        this.setState({
          locationData: {
            Video: {
              pprice: locationData.Video.pprice,
              pfirst: locationData.Video.pfirst,
              psecond: locationData.Video.psecond,
              pthird: locationData.Video.pthird,
              bprice: locationData.Video.bprice,
              bfirst: locationData.Video.bfirst,
              bsecond: locationData.Video.bsecond,
              bthird: locationData.Video.bthird,
            },
            Photo: {
              pprice: locationData.Photo.pprice,
              pfirst: locationData.Photo.pfirst,
              psecond: locationData.Photo.psecond,
              pthird: locationData.Photo.pthird,
              bprice: locationData.Photo.bprice,
              bfirst: locationData.Photo.bfirst,
              bsecond: locationData.Photo.bsecond,
              bthird: locationData.Photo.bthird,
            },
          },
        });
        console.log(this.state.locationData.Video.bprice);
      })();
    }
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          location: {
            lat: position.coords.latitude,
            lon: position.coords.longitude,
          },
        });
      },
      (err) => console.log(err)
    );
  }

  detailsHandler = (value) => {
    this.setState({
      details: value,
    });

    console.log(this.state.details);
  };

  addressHandler = (value) => {
    this.setState({
      address: value,
    });
  };
  phoneNoHandler = (value) => {
    this.setState({
      phoneNo: value,
    });
  };
  dateHandler = (value) => {
    this.setState({
      date: value,
    });
  };
  // timeHandler = (value) => {
  //   this.setState({
  //     time: value,
  //   });
  // };

  handleSubmit = () => {
    (async () => {
      await customBooking(
        this.state.address,
        this.state.phoneNo,
        this.state.date,
        this.state.location.lat,
        this.state.location.lon,
        this.state.key1,
        this.state.key2,
        this.state.details
      );
    })();

    // axios
    //   .post(
    //     `http://localhost:5000/spring-internship/us-central1/app/api/uploaddetails`,
    //     {
    //       address: this.state.address,
    //       phoneno: this.state.phoneNo,
    //       date: this.state.date,
    //       lat: this.state.location.lat,
    //       lon: this.state.location.lon,
    //       order: this.state.key1,
    //       price: this.state.key2,
    //       details: this.state.details,
    //     }
    //   )
    //   .then((res) => {
    //     console.log(res.data);
    //     console.log("Done!");
    //     toast.info("Booked Successfully", {
    //       position: "top-right",
    //       autoClose: 5000,
    //       hideProgressBar: false,
    //       closeOnClick: true,
    //       pauseOnHover: true,
    //       draggable: true,
    //       progress: undefined,
    //     });
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //     toast.error("Something Went wrong!", {
    //       position: "top-right",
    //       autoClose: 5000,
    //       hideProgressBar: false,
    //       closeOnClick: true,
    //       pauseOnHover: true,
    //       draggable: true,
    //       progress: undefined,
    //     });
    //   });
  };
  render() {
    return (
      <div>
        <Form>
          <Form.Row>
            <br />
            <br />
          </Form.Row>
          <div className='tabs-content'>
            <Tabs
              variant='pills'
              id='controlled-tab-example'
              activeKey={this.state.key}
              onSelect={(k) => {
                this.setState({ key1: k });
              }}
              style={{ marginLeft: '100px' }}
            >
              <Tab eventKey='video' title='Video'>
                <Form.Group controlId='formGridAddress1'>
                  <Form.Label>Address</Form.Label>
                  <Form.Control
                    onChange={(e) => {
                      this.addressHandler(e.target.value);
                    }}
                    className='colApp'
                    placeholder='1234 Main St'
                  />
                </Form.Group>
                <Form.Group controlId='formGridPhoneNo1'>
                  <Form.Label>Phone No</Form.Label>
                  <Form.Control
                    className='colApp'
                    type='number'
                    placeholder='+91 '
                    onChange={(e) => {
                      this.phoneNoHandler(e.target.value);
                    }}
                  />
                </Form.Group>
                <Form.Group controlId='formGridDate1'>
                  <Form.Label>Date</Form.Label>
                  <Form.Control
                    className='colApp'
                    type='dateTime-local'
                    placeholder='Date'
                    onChange={(e) => {
                      this.dateHandler(e.target.value);
                    }}
                  />
                </Form.Group>
                {/* <Form.Group controlId="formGridTime1">
                  <Form.Label>Time</Form.Label>
                  <Form.Control
                    // onChange={(e) => {
                    //   this.timeHandler(e.target.value);
                    // }}
                    type="time-local"
                    className="colApp"
                    placeholder="Time"
                  />
                </Form.Group> */}
                <Form.Group controlId='formGridAddress1'>
                  <Form.Label>Details</Form.Label>
                  <Form.Control
                    onChange={(e) => {
                      this.detailsHandler(e.target.value);
                    }}
                    className='colApp'
                    placeholder='Details'
                  />
                </Form.Group>
                <div className='tabs-content'>
                  <Tabs
                    variant='pills'
                    id='controlled-tab-example'
                    activeKey={this.state.key}
                    onSelect={(k) => {
                      this.setState({ key2: k });
                    }}
                    style={{ marginLeft: '100px' }}
                  >
                    <Tab eventKey='basic' title='Basic'>
                      <h4>{this.state.locationData.Video.bfirst}</h4>
                      <h4>{this.state.locationData.Video.bsecond}</h4>
                      <h4>{this.state.locationData.Video.bthird}</h4>
                      <h3>
                        <Badge variant='success' as='h4'>
                          Price :
                        </Badge>
                        {'  '}
                        <Badge variant='success'>
                          {this.state.locationData.Video.bprice}
                        </Badge>{' '}
                      </h3>
                    </Tab>
                    <Tab eventKey='premium' title='Premium'>
                      <h4>{this.state.locationData.Video.pfirst}</h4>
                      <h4>{this.state.locationData.Video.psecond}</h4>
                      <h4>{this.state.locationData.Video.pthird}</h4>
                      <h3>
                        <Badge variant='success' as='h4'>
                          Price :
                        </Badge>
                        {'  '}
                        <Badge variant='success'>
                          {this.state.locationData.Video.pprice}
                        </Badge>{' '}
                      </h3>
                    </Tab>
                  </Tabs>
                </div>
              </Tab>
              <Tab eventKey='photo' title='Photo'>
                <Form.Group controlId='formGridAddress2'>
                  <Form.Label>Address</Form.Label>
                  <Form.Control
                    onChange={(e) => {
                      this.addressHandler(e.target.value);
                    }}
                    className='colApp'
                    placeholder='1234 Main St'
                  />
                </Form.Group>
                <Form.Group controlId='formGridPhoneNo2'>
                  <Form.Label>Phone No</Form.Label>
                  <Form.Control
                    onChange={(e) => {
                      this.phoneNoHandler(e.target.value);
                    }}
                    className='colApp'
                    placeholder='+91 '
                  />
                </Form.Group>
                <Form.Group controlId='formGridDate2'>
                  <Form.Label>Date</Form.Label>
                  <Form.Control
                    onChange={(e) => {
                      this.dateHandler(e.target.value);
                    }}
                    className='colApp'
                    type='dateTime-local'
                    placeholder='Date'
                  />
                </Form.Group>
                {/* <Form.Group controlId="formGridTime2">
                  <Form.Label>Time</Form.Label>
                  <Form.Control
                  className="colApp"
                  placeholder="Time"
                  onChange={(e) => {
                    this.timeHandler(e.target.value);
                  }}
                  />
                </Form.Group> */}
                <Form.Group controlId='formGridAddress1'>
                  <Form.Label>Details</Form.Label>
                  <Form.Control
                    onChange={(e) => {
                      this.detailsHandler(e.target.value);
                    }}
                    className='colApp'
                    placeholder='Details'
                  />
                </Form.Group>
                <div className='tabs-content'>
                  <Tabs
                    variant='pills'
                    id='controlled-tab-example'
                    activeKey={this.state.key}
                    onSelect={(k) => {
                      this.setState({ key2: k });
                    }}
                    style={{ marginLeft: '100px' }}
                  >
                    <Tab eventKey='basic' title='Basic'>
                      <h4>{this.state.locationData.Photo.bfirst}</h4>
                      <h4>{this.state.locationData.Photo.bsecond}</h4>
                      <h4>{this.state.locationData.Photo.bthird}</h4>
                      <h3>
                        <Badge variant='success' as='h4'>
                          Price :
                        </Badge>
                        {'  '}
                        <Badge variant='success'>
                          {this.state.locationData.Photo.bprice}
                        </Badge>{' '}
                      </h3>
                    </Tab>
                    <Tab eventKey='premium' title='Premium'>
                      <h4>{this.state.locationData.Photo.pfirst}</h4>
                      <h4>{this.state.locationData.Photo.psecond}</h4>
                      <h4>{this.state.locationData.Photo.pthird}</h4>
                      <h3>
                        <Badge variant='success' as='h4'>
                          Price :
                        </Badge>
                        {'  '}
                        <Badge variant='success'>
                          {this.state.locationData.Photo.pprice}
                        </Badge>{' '}
                      </h3>
                    </Tab>
                  </Tabs>
                </div>
              </Tab>
            </Tabs>
          </div>
          {/* <div className='tabs-content'>
            <Tabs
              variant='pills'
              id='controlled-tab-example'
              activeKey={this.state.key}
              onSelect={(k) => {
                this.setState({ key2: k });
              }}
              style={{ marginLeft: '100px' }}
            >
              <Tab eventKey='basic' title='Basic'>
                <h4>Lorem</h4>
                <h4>Lorem</h4>
                <h4>Lorem</h4>
                <h3>
                  <Badge variant='success' as='h4'>
                    Price :
                  </Badge>
                  {'  '}
                  <Badge variant='success'>349</Badge>{' '}
                </h3>
              </Tab>
              <Tab eventKey='premium' title='Premium'>
                <h4>Lorem</h4>
                <h4>Lorem</h4>
                <h4>Lorem</h4>
                <h3>
                  <Badge variant='success' as='h4'>
                    Price :
                  </Badge>
                  {'  '}
                  <Badge variant='success'>549</Badge>{' '}
                </h3>
              </Tab>
            </Tabs>
          </div> */}
          <Form.Row>
            <br />
            <br />
          </Form.Row>

          <br />
          {console.log(this.state)}
          <Button
            variant='primary'
            type='submit'
            style={{ marginLeft: '135px' }}
            onClick={(e) => {
              e.preventDefault();
              this.handleSubmit();
            }}
          >
            Submit
          </Button>
          <ToastContainer />
        </Form>
      </div>
    );
  }
}

export default Forms;
