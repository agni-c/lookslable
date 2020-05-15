import React from "react";
import ReactDom from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import * as dotenv from "dotenv";
import App from "./P_User/components/App";

dotenv.config();

ReactDom.render(<App />, document.getElementById("root"));
