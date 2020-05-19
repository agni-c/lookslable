import React from "react";
import { useState, useEffect } from "react";
import { Carousel } from "react-bootstrap";
import axios from "axios";
import "./styles.css";

export default function Gallery() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const getGallery = () => {
    axios
      .post(
        "http://localhost:5000/spring-internship/us-central1/app/api/upload/usergallery"
      )
      .then((response) => {
        console.log(response);
      });
  };
  useEffect(() => {
    getGallery();
  }, []);

  return (
    <div>
      <Carousel
        style={{ maxWidth: "95%", marginLeft: "10px" }}
        className="media"
        indicators={false}
        activeIndex={index}
        onSelect={handleSelect}
      >
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1564940265879-ad8e8f6f3606?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
            alt="First slide"
          />
          <Carousel.Caption />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1564940265879-ad8e8f6f3606?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
            alt="Second slide"
          />

          <Carousel.Caption />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1564940265879-ad8e8f6f3606?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
            alt="Fifth slide"
          />

          <Carousel.Caption />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1564940265879-ad8e8f6f3606?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
            alt="Third slide"
          />

          <Carousel.Caption />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1564940265879-ad8e8f6f3606?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
            alt="Fourth slide"
          />

          <Carousel.Caption />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
