import React from "react";
import { useState } from "react";
import { Tabs, Tab } from "react-bootstrap";
import CardGallery from "./CardGallery";
import "./styles.css";
import Forms from "./Forms";
export default function HeroMain() {
  const [key, setKey] = useState("home");
  return (
    <div>
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
      >
        <Tab eventKey="home" title="Popular">
          <CardGallery title="Gallery 1" name="Bill" className="margin-bt" />
        </Tab>
        <Tab eventKey="profile" title="My Location">
          <Forms />
        </Tab>
      </Tabs>
    </div>
  );
}
