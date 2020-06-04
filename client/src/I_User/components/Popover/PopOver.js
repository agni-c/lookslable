import React from "react";
import "./popover.css";
import {
  Popover,
  OverlayTrigger,
  Button,
  Form,
  DropdownButton,
  Dropdown,
  ButtonGroup,
} from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import firebase from "firebase";

class PopOver extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      no_of_users: "",
      phoneNo: "",
      date: "",
      // I_uid: firebase.auth().currentUser.uid,
    };
  }
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
  handleSumbit = () => {
    axios
      .post(
        `http://localhost:5000/spring-internship/us-central1/app/api/uploaddetails/`,
        {
          PhoneNo: this.state.phoneNo,
          eventdate: {
            date: this.state.date,
          },
          price: "350",
          numberOfUsers: this.state.no_of_users,
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
      });
  };
  popover = (
    <Popover id="popover-top" className="pop-over">
      <Popover.Title as="h3">Number of users</Popover.Title>
      <Popover.Content>
        <Form className="form-c">
          <Form.Group controlId="formGridPhoneNo1">
            <Form.Label>Phone No</Form.Label>
            <Form.Control
              onChange={(e) => {
                this.phoneNoHandler(e.target.value);
              }}
              className="colApp"
              type="number"
              placeholder="+91 "
            />
          </Form.Group>
          <Form.Group controlId="formGridDate1">
            <Form.Label>Date & Time</Form.Label>
            <Form.Control
              className="colApp"
              type="dateTime-local"
              placeholder="Date"
              onChange={(e) => {
                this.dateHandler(e.target.value);
              }}
            />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>No Of Users</Form.Label>
            <Form.Control
              as="select"
              onChange={(e) => {
                this.setState({
                  no_of_users: e.target.value,
                });
              }}
            >
              <option>1</option>
              <option>2</option>

              <option>5-6</option>
            </Form.Control>
          </Form.Group>
          <Button variant="primary" onClick={this.handleSubmit}>
            Shoot
          </Button>
        </Form>
      </Popover.Content>
    </Popover>
  );
  render() {
    return (
      <div>
        <OverlayTrigger trigger="click" placement="top" overlay={this.popover}>
          <h4 style={{ cursor: "pointer" }}> Shoot </h4>
        </OverlayTrigger>
      </div>
    );
  }
}

export default PopOver;
