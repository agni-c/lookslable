import React from "react";
import { useState, useEffect } from "react";
import {
  Carousel,
  Card,
  Button,
  Badge,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import axios from "axios";
import PopOver from "./Popover/PopOver";
import "./styles.css";
export default function Gallery() {
  const [index, setIndex] = useState(0);
  const [data, setData] = useState([{}]);
  const [image, setImage] = useState([]);
  const [pUids, setPUids] = useState([]);
  const [landmarks, setLandmarks] = useState([]);
  // const [pUser, setPUser] = useState({
  //   puids: [],
  //   puid: [
  //     {
  //       landmarks: [],
  //     },
  //   ],
  //   landmark: {
  //     images: [],
  //   },
  // });

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  useEffect(() => {
    axios
      .get(
        "http://localhost:5000/spring-internship/us-central1/app/api/upload/allUsergallery"
      )
      .then((response) => {
        // const someData = response.data.filter((data, index) => {
        //   return data.puid === "LeTR5YNzqBN2OJkg6qni44JblUv1";
        // });

        response.data.forEach((ele, index) => {
          setData((data) => [...data, ele]);
          setImage((image) => [...image, ele.images]);
        });
        // //For getting puids

        // const puids = response.data.filter((data, index) => {
        //   return data.puid !== "1";
        // });

        // let outputPuidsArray = [...new Set(puids.map((puid) => puid.puid))];
        // let finalOutputPuidsArray = outputPuidsArray.filter((ele, index) => {
        //   return ele !== undefined;
        // });
        // finalOutputPuidsArray.forEach((ele, index) => {
        //   setPUids((pUids) => [...pUids, ele]);
        // });

        // //for getting landmarks from puids

        // let outputLandmarks = [
        //   ...new Set(puids.map((landmark) => landmark.landmark)),
        // ];
        // outputLandmarks.forEach((ele, index) => {
        //   setLandmarks((landmarks) => [...landmarks, ele]);
        // });

        // const finalDataArray = puids.filter((ele, index) => {
        //   return ele.puid !== pUids[index];
        // });
        // console.log(finalDataArray);

        // let y = finalDataArray.reduce((acc, ele) => {
        //   acc[ele] = ele;
        //   return acc;
        // }, {});
        // console.log(y);
        // console.log(finalDataArray);
        // const anotherArray = finalDataArray.filter((ele, index) => {
        //   let anAnotherArray = puids.filter((ele2, index2) => {
        //     return ele2.puid === ele;
        //   });
        //   return anAnotherArray;
        // });
        // console.log(anotherArray);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      {console.log(data)}
      {data &&
        data.map((ele, index) => {
          if (ele.images) {
            return (
              <>
                <br />
                <Card style={{ color: "black" }}>
                  <Card.Title style={{ textAlign: "center" }}>
                    {ele.landmark}
                  </Card.Title>
                  <Card.Body>
                    <Card.Img variant="top" src={ele.images} alt="something" />
                    <Card.Text>{ele.names}</Card.Text>
                  </Card.Body>
                </Card>

                <br />
              </>
            );
          }
        })}
    </>
  );
}
