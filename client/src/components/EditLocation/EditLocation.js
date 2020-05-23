import React from "react";
import "./app.css";
import {
  Card,
  Button,
  ThemeProvider,
  InputGroup,
  FormControl,
  Jumbotron,
  DropdownButton,
  Dropdown,
  Form,
} from "react-bootstrap";
import axios from "axios";
import firebase from "firebase";
class EditLocation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      landmark: [],
      price: [],
      uuid: [],
      buttonClicked: false,
      priceClicked: false,
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
  saveHandler = (index) => {
    axios
      .post(
        `http://localhost:5000/spring-internship/us-central1/app/api/landmark/update/${this.state.uuid[index]}`,
        {
          landmark: this.state.landmark[index],
          price: this.state.price[index],
        }
      )
      .then(function (responce) {
        console.log(responce);
        console.log("I am inside");
      })
      .catch(function (err) {
        console.log(err);
      });
  };
  getData = () => {
    axios
      .get(
        `http://localhost:5000/spring-internship/us-central1/app/api/landmark/${
          firebase.auth().currentUser.uid
        }`
      )
      .then((responce) => {
        // console.log("This is actual data", responce.data);
        const entries = Object.entries(responce.data);
        // console.log(entries);
        // console.log(entries);
        // console.log(entries[0][1]);
        entries.map((ele, index) => {
          // console.log(ele[1]);
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
        // entries.map((ele, index) => {
        //   console.log(ele[1]);
        //   let land = ele[1].landmark;
        //   let priceRate = ele[1].price;
        //   this.setState({
        //     ...this.state.landmark,
        //     landmark: land,
        //   });
        //   this.setState({
        //     ...this.state.price,
        //     price: priceRate,
        //   });
        // });
        // console.log(key);
        // this.setState({
        //   landmark: responce.data[0].landmark,
        // });
        // this.setState({ price: responce.data[0].price });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  componentDidMount() {
    this.getData();
  }
  render() {
    const { landmark, price } = this.state;
    return (
      <>
        <div className="content">
          <h1>Edit Location</h1>
          <Card style={{ minHeight: "460px" }}>
            <Card.Header>Edit Location</Card.Header>
            {landmark.map((land, index) => {
              return (
                <Jumbotron>
                  <InputGroup className="mb-3">
                    {console.log(this.state)}
                    <FormControl
                      disabled={!this.state.buttonClicked}
                      placeholder={land}
                      aria-label="Recipient's username"
                      aria-describedby="basic-addon2"
                      onChange={(event) => {
                        this.landmarkHandler(
                          event.target.value,
                          index
                        );
                      }}
                    />

                    <InputGroup.Append>
                      <Button
                        variant="outline-secondary"
                        onClick={() => {
                          this.setState({
                            buttonClicked: true,
                          });
                        }}
                      >
                        Edit
                      </Button>

                      <Button
                        variant="outline-secondary"
                        onClick={() => {
                          this.saveHandler(index);
                        }}
                      >
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
                      }}
                    >
                      Edit
                    </Button>

                    <Form.Control
                      disabled={!this.state.priceClicked}
                      as="select"
                      onChange={(event) => {
                        this.priceHandler(
                          event.target.value,
                          index
                        );
                      }}
                    >
                      <option>199</option>
                      <option>299</option>
                      <option>499</option>
                      <option>999</option>
                      <option>1499</option>
                    </Form.Control>
                  </Card.Body>
                </Jumbotron>
              );
            })}
          </Card>
        </div>
      </>
    );
  }
}

export default EditLocation;
