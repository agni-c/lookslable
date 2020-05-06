import React, { useState } from "react";

import "./styles.css";
import App from "./SampleForm/App";
class Upload extends React.Component {
  // constructor() {
  //   super();
  //   this.handleSubmit = this.handleSubmit.bind(this);
  // }
  // handleSubmit(event) {
  //   event.preventDefault();
  //   const data = new FormData(event.target);

  //   axios
  //     .post(
  //       "http://localhost:3000/spring-internship/us-central1/app/api/upload",
  //       data
  //     )
  //     .then((res) => {
  //       //  print response status
  //       console.log("Data Sended");
  //     })
  //     .catch((err) => {
  //       // print response status
  //       console.log("Something went wrong");
  //     });
  // }
  render() {
    return (
      <>
        {/* <Datepicker /> */}

        <App />
      </>
    );
  }
}

export default Upload;
