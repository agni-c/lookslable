import {
  deleteEditLocation,
  updateEditLocation,
  getEditLocation,
} from '../../api';
import React from 'react';
import './EditLocation.css';
import {
  ThemeProvider,
  InputGroup,
  FormControl,
  Jumbotron,
  DropdownButton,
  Dropdown,
  Form,
  Alert,
} from 'react-bootstrap';
import { CardButton, Card, Button } from '@material-ui/core';
import { Link, Route, BrowserRouter, Switch } from 'react-router-dom';
import axios from 'axios';
import firebase from 'firebase';
class EditLocation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      landmark: [],
      price: [],
      uuid: [],
      buttonClicked: false,
      priceClicked: false,
      puid: firebase.auth().currentUser.uid,
      backButtonClicked: false,
    };
  }
  landmarkHandler = (newLandmark, index) => {
    let landmarks = [...this.state.landmark];
    let landmark = { ...landmarks[index] };
    landmark = newLandmark;
    landmarks[index] = landmark;
    this.setState({ landmark: landmarks });
  };
  priceHandler = (newPrice, index) => {
    let prices = [...this.state.price];
    let price = { ...prices[index] };
    price = newPrice;
    prices[index] = price;
    this.setState({ price: prices });
  };
  deleteHanlder = (index) => {
    let landmarks = [...this.state.landmark];
    landmarks.splice(index, 1);
    this.setState({ landmark: landmarks });
    let prices = [...this.state.price];
    prices.splice(index, 1);
    this.setState({ price: prices });
    let uuids = [...this.state.uuid];
    uuids.splice(index, 1);
    this.setState({ uuid: uuids });

    deleteEditLocation(this.state.uuid[index]);
  };
  saveHandler = (index) => {
    updateEditLocation(
      this.state.uuid[index],
      this.state.landmark[index],
      this.state.price[index]
    );
  };
  getData = async () => {
    const responce = await getEditLocation();

    console.log(responce.data);
    const entries = Object.entries(responce.data);

    entries.map((ele, index) => {
      console.log(ele);
      let land = ele[1].landmark;
      let priceRate = ele[1].price;
      let uid = ele[1].uuid;
      this.setState({
        landmark: [...this.state.landmark, land],
      });
      this.setState({
        price: [...this.state.price, priceRate],
      });
      this.setState({
        uuid: [...this.state.uuid, uid],
      });
    });
  };

  componentDidMount() {
    this.getData();
  }
  render() {
    const { landmark, price } = this.state;
    return (
      <div className='main-content'>
        <div className='content'>
          <div className='grid-container'>
            {landmark.map((land, index) => {
              return (
                <>
                  {/* <Alert key={index} variant="success" className="grid-item">
										<Jumbotron fluid>
											<h4>Landmark: {land}</h4>
											<InputGroup className="mb-3">
												<FormControl
													disabled={!this.state.buttonClicked}
													placeholder={land}
													aria-label="Recipient's username"
													aria-describedby="basic-addon2"
													onChange={(event) => {
														this.landmarkHandler(event.target.value, index);
													}}
												/>

												<InputGroup.Append>
													<Button
														variant="outline-secondary"
														onClick={() => {
															this.setState({
																buttonClicked: true,
															});
														}}>
														Edit
													</Button>

													<Button
														variant="outline-success"
														onClick={() => {
															this.saveHandler(index);
														}}>
														Save
													</Button>
												</InputGroup.Append>
											</InputGroup>
											<Card.Body>
												<h5>Price : {price[index]}</h5>

												<Button
													variant="outline-secondary"
													onClick={() => {
														this.setState({
															priceClicked: true,
														});
													}}>
													Edit
												</Button>

												<Form.Control
													disabled={!this.state.priceClicked}
													as="select"
													onChange={(event) => {
														this.priceHandler(event.target.value, index);
													}}>
													<option>199</option>
													<option>299</option>
													<option>499</option>
													<option>999</option>
													<option>1499</option>
												</Form.Control>
												<Button
													variant="outline-danger"
													onClick={() => {
														this.deleteHanlder(index);
													}}>
													Delete Landmark
												</Button>
											</Card.Body>
										</Jumbotron>
									</Alert> */}
                  <Card
                    style={{ backgroundColor: '#fff', margin: '25px 25px' }}
                  >
                    <div style={{ padding: '10px' }}>
                      <div
                        style={{ display: 'flex', justifyContent: 'center' }}
                      >
                        <p>{land}</p>
                      </div>
                      <InputGroup
                        className='mb-3'
                        style={{
                          display: 'flex',
                          justifyContent: 'center',
                          flexDirection: 'column',
                        }}
                      >
                        <FormControl
                          style={{ width: 'auto', marginBottom: '15px' }}
                          disabled={!this.state.buttonClicked}
                          placeholder={land}
                          aria-label="Recipient's username"
                          aria-describedby='basic-addon2'
                          onChange={(event) => {
                            this.landmarkHandler(event.target.value, index);
                          }}
                        />

                        <InputGroup.Append>
                          <Button
                            variant='contained'
                            style={{
                              backgroundColor: '#ed3181',
                              color: '#fff',
                              height: '40px',
                              margin: '0 10px 0 0',
                            }}
                            onClick={() => {
                              this.setState({
                                buttonClicked: true,
                              });
                            }}
                          >
                            Edit
                          </Button>

                          <Button
                            variant='contained'
                            style={{
                              margin: '0 10px 0 0',
                              backgroundColor: '#ed3181',
                              color: '#fff',
                              height: '40px',
                            }}
                            onClick={() => {
                              this.saveHandler(index);
                            }}
                          >
                            Save
                          </Button>
                          <Button
                            variant='contained'
                            style={{
                              margin: '0 10px 0 0',
                              backgroundColor: '#ed3181',
                              color: '#fff',
                              height: '40px',
                              width: 'auto',
                            }}
                            onClick={() => {
                              this.deleteHanlder(index);
                            }}
                          >
                            Delete Landmark
                          </Button>
                        </InputGroup.Append>
                      </InputGroup>
                      <div>
                        <p>Price : {price[index]}</p>
                        <Button
                          variant='contained'
                          style={{
                            margin: '0 10px 10px 0',
                            backgroundColor: '#ed3181',
                            color: '#fff',
                            height: '40px',
                            width: 'auto',
                          }}
                          onClick={() => {
                            this.setState({
                              priceClicked: true,
                            });
                          }}
                        >
                          Edit Price
                        </Button>
                        <Form.Control
                          disabled={!this.state.priceClicked}
                          as='select'
                          onChange={(event) => {
                            this.priceHandler(event.target.value, index);
                          }}
                        >
                          <option>199</option>
                          <option>299</option>
                          <option>499</option>
                          <option>999</option>
                          <option>1499</option>
                        </Form.Control>
                      </div>
                    </div>
                  </Card>
                </>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default EditLocation;
