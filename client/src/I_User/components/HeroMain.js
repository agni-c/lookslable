import React from "react";
import { useState } from "react";
import { Tabs, Tab } from "react-bootstrap";
import Gallery from "./Gallery";
import "./styles.css";
import Forms from "./Form/Forms";
export default function HeroMain() {
  const [key, setKey] = useState("popular");
  return (
    <div>
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
      >
        <Tab eventKey="popular" title="Popular">
          <Gallery />
        </Tab>
        <Tab eventKey="myLocation" title="My Location">
          <Forms />
        </Tab>
      </Tabs>
      {console.log("main", key)}
    </div>
  );
}
