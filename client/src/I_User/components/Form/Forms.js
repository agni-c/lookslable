import React from "react";
import { Tabs, Tab, Badge } from "react-bootstrap";
import { Form, Button, Col } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./form.css";
class Forms extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      key1: "video",
      key2: "basic",
    };
  }

  handleSumbit = (e) => {
    e.preventDefault();
    toast.info("Successfully Submited", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  render() {
    return (
      <div>
        <Form onSubmit={this.handleSumbit}>
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
                  <Form.Control className="colApp" placeholder="1234 Main St" />
                </Form.Group>
                <Form.Group controlId="formGridPhoneNo1">
                  <Form.Label>Phone No</Form.Label>
                  <Form.Control
                    className="colApp"
                    type="number"
                    placeholder="+91 "
                  />
                </Form.Group>
                <Form.Group controlId="formGridDate1">
                  <Form.Label>Date</Form.Label>
                  <Form.Control
                    className="colApp"
                    type="date"
                    placeholder="Date"
                  />
                </Form.Group>
                <Form.Group controlId="formGridTime1">
                  <Form.Label>Time</Form.Label>
                  <Form.Control className="colApp" placeholder="Time" />
                </Form.Group>
              </Tab>
              <Tab eventKey="photo" title="Photo">
                <Form.Group controlId="formGridAddress2">
                  <Form.Label>Address</Form.Label>
                  <Form.Control className="colApp" placeholder="1234 Main St" />
                </Form.Group>
                <Form.Group controlId="formGridPhoneNo2">
                  <Form.Label>Phone No</Form.Label>
                  <Form.Control className="colApp" placeholder="+91 " />
                </Form.Group>
                <Form.Group controlId="formGridDate2">
                  <Form.Label>Date</Form.Label>
                  <Form.Control className="colApp" placeholder="Date" />
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
