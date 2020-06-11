import React from "react";
import { Tabs, Tab, Badge } from "react-bootstrap";
import { Form, Button, Col } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import "./form.css";
class Forms extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      key1: "video",
      key2: "basic",
      address: "",
      phoneNo: "",
      date: "",
      location: {
        lat: "",
        lon: "",
      },
    };
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
  //   console.log(value);
  // };

  handleSubmit = () => {
    axios
      .post(
        `http://localhost:5000/spring-internship/us-central1/app/api/uploaddetails`,
        {
          address: this.state.address,
          phoneno: this.state.phoneNo,
          date: this.state.date,
          lat: this.state.location.lat,
          lon: this.state.location.lon,
          order: this.state.key1,
          price: this.state.key2,
        }
      )
      .then((res) => {
        console.log(res.data);
        console.log("Done!");
        toast.info("Booked Successfully", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      })
      .catch((err) => {
        console.log(err);
        toast.error("Something Went wrong!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  };
  render() {
    return (
      <div>
        <Form>
          <Form.Row>
            <br />
            <br />
          </Form.Row>
          <div className="tabs-content">
            <Tabs
              variant="pills"
              id="controlled-tab-example"
              activeKey={this.state.key}
              onSelect={(k) => {
                this.setState({ key1: k });
              }}
              style={{ marginLeft: "100px" }}
            >
              <Tab eventKey="video" title="Video">
                <Form.Group controlId="formGridAddress1">
                  <Form.Label>Address</Form.Label>
                  <Form.Control
                    onChange={(e) => {
                      this.addressHandler(e.target.value);
                    }}
                    className="colApp"
                    placeholder="1234 Main St"
                  />
                </Form.Group>
                <Form.Group controlId="formGridPhoneNo1">
                  <Form.Label>Phone No</Form.Label>
                  <Form.Control
                    className="colApp"
                    type="number"
                    placeholder="+91 "
                    onChange={(e) => {
                      this.phoneNoHandler(e.target.value);
                    }}
                  />
                </Form.Group>
                <Form.Group controlId="formGridDate1">
                  <Form.Label>Date</Form.Label>
                  <Form.Control
                    className="colApp"
                    type="dateTime-local"
                    placeholder="Date"
                    onChange={(e) => {
                      this.dateHandler(e.target.value);
                    }}
                  />
                </Form.Group>
                <Form.Group controlId="formGridTime1">
                  <Form.Label>Time</Form.Label>
                  <Form.Control
                    // onChange={(e) => {
                    //   this.timeHandler(e.target.value);
                    // }}
                    type="time-local"
                    className="colApp"
                    placeholder="Time"
                  />
                </Form.Group>
              </Tab>
              <Tab eventKey="photo" title="Photo">
                <Form.Group controlId="formGridAddress2">
                  <Form.Label>Address</Form.Label>
                  <Form.Control
                    onChange={(e) => {
                      this.addressHandler(e.target.value);
                    }}
                    className="colApp"
                    placeholder="1234 Main St"
                  />
                </Form.Group>
                <Form.Group controlId="formGridPhoneNo2">
                  <Form.Label>Phone No</Form.Label>
                  <Form.Control
                    onChange={(e) => {
                      this.phoneNoHandler(e.target.value);
                    }}
                    className="colApp"
                    placeholder="+91 "
                  />
                </Form.Group>
                <Form.Group controlId="formGridDate2">
                  <Form.Label>Date</Form.Label>
                  <Form.Control
                    onChange={(e) => {
                      this.dateHandler(e.target.value);
                    }}
                    className="colApp"
                    type="dateTime-local"
                    placeholder="Date"
                  />
                </Form.Group>
                <Form.Group controlId="formGridTime2">
                  <Form.Label>Time</Form.Label>
                  <Form.Control className="colApp" placeholder="Time" />
                </Form.Group>
              </Tab>
            </Tabs>
          </div>
          <Form.Row>
            <br />
            <br />
          </Form.Row>
          <div className="tabs-content">
            <Tabs
              variant="pills"
              id="controlled-tab-example"
              activeKey={this.state.key}
              onSelect={(k) => {
                this.setState({ key2: k });
              }}
              style={{ marginLeft: "100px" }}
            >
              <Tab eventKey="basic" title="Basic">
                <h4>Lorem</h4>
                <h4>Lorem</h4>
                <h4>Lorem</h4>
                <h3>
                  <Badge variant="success" as="h4">
                    Price :
                  </Badge>
                  {"  "}
                  <Badge variant="success">349</Badge>{" "}
                </h3>
              </Tab>
              <Tab eventKey="premium" title="Premium">
                <h4>Lorem</h4>
                <h4>Lorem</h4>
                <h4>Lorem</h4>
                <h3>
                  <Badge variant="success" as="h4">
                    Price :
                  </Badge>
                  {"  "}
                  <Badge variant="success">549</Badge>{" "}
                </h3>
              </Tab>
            </Tabs>
          </div>
          <br />
          {console.log(this.state)}
          <Button
            variant="primary"
            type="submit"
            style={{ marginLeft: "135px" }}
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
