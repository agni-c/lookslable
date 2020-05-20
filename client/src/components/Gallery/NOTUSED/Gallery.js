import React from "react";
import { useState, useEffect, useRef } from "react";
import { Carousel, Button } from "react-bootstrap";
import axios from "axios";
import "./styles.css";
import GalleryRender from "./GalleryRender";

// class Gallery extends React.Component {

// const imgRef = useRef(null);
// const handleSelect = (selectedIndex, e) => {
//   setIndex(selectedIndex);
// };

// useEffect(() => {

// }, []);

// console.log(imgRef.current.);
// for (let arr in imgRef.current) {
//   console.log(arr.current);
// }
// const obj = imgRef.current;
// console.log("This is ", obj);
// for (const property in obj) {
//   // console.log(`${property}: ${obj[property]}`);
//   for (const MiddleProp in property) {
//     console.log(`${MiddleProp}:${obj[property[MiddleProp]]}`);
//   }
// }
// console.log(obj[0]);
// const obj = gallery;
// console.log(obj);
// console.log(gallery);
// const variable = imgRef.current;
// return (
//   <div>
//     <GalleryRender images={gallery} />
{
  /* <Carousel
        style={{ maxWidth: "95%", marginLeft: "10px" }}
        className="media"
        indicators={false}
        activeIndex={index}
        onSelect={handleSelect}
      > */
}

{
  /* <Carousel.Item>
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
        </Carousel.Item> */
}
{
  /* </Carousel> */
}
{
  /* </div>
  );
}
const getGallery = async () => {
      const response = await axios
        .get(
          "http://localhost:5000/spring-internship/us-central1/app/api/upload/usergallery"
        )
        .then((response) => {
          // console.log(response.data);
          imgRef.current = response.data.length;
          // for (const obj in imgRef.current) {
          //   console.log(obj);
          // }
          for (let i = 0; i < imgRef.current; i++) {
            console.log(response.data[i].images);
            setGallery(response.data[i].images);
          }
        });
    };
    getGallery();
export default Gallery; */
}

// class Gallery extends React.Component {
//   state = { images: [] };
//   getGallery = async () => {
//     const response = await axios
//       .get(
//         "http://localhost:5000/spring-internship/us-central1/app/api/upload/usergallery"
//       )
//       .then((response) => {
//         // console.log(response.data);
//         const len = response.data.length;
//         // for (const obj in imgRef.current) {
//         //   console.log(obj);
//         // }
//         for (let i = 0; i < len; i++) {
//           console.log(response.data[i].images);
//           // setGallery(response.data[i].images);
//           this.setState({ images: response.data[i].images });
//         }
//       });
//     this.getImages();
//   };
//   // getGallery();
//   getImages = () => {
//     console.log("HI");
//   };
//   componentDidMount() {
//     this.getGallery();
//   }
//   render() {
//     return (
//       <div>
//         <Button onClick={this.getGallery}>GetImages</Button>
//         <GalleryRender />
//         {console.log("This is ", this.state.images)}
//       </div>
//     );
//   }
// }
// export default Gallery;
