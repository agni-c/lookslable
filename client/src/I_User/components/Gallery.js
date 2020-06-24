import React from 'react';
import { useState, useEffect } from 'react';
import {
  Carousel,
  Card,
  Button,
  Badge,
  Container,
  Row,
  Col,
} from 'react-bootstrap';
import Landmark from './Landmark';
import axios from 'axios';
import PopOver from './Popover/PopOver';
import './styles.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
export default function Gallery() {
  const [index, setIndex] = useState(0);
  const [dataRecieved, setDataRecieved] = useState(false);
  const [data, setData] = useState([{}]);
  const [image, setImage] = useState([]);
  const [pUids, setPUids] = useState([]);
  const [landmarks, setLandmarks] = useState([]);
  const [currLandmark, setCurrLandmark] = useState();
  const [multipleLandmarkImages, setMultipleLandmarkImages] = useState([0]);
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
  //for grouping the landmarks

  function landmarksGrouper(list, getKey) {
    const map = new Map();
    list.forEach((item) => {
      const key = getKey(item);
      const arrayList = map.get(key);
      if (!arrayList) {
        map.set(key, [item]);
      } else {
        arrayList.push(item);
      }
    });
    return map;
  }
  let groupedLandmarks = landmarksGrouper(data, (data) => data.landmark);

  // console.log(groupedLandmarks);
  useEffect(() => {
    axios
      .get(
        'http://localhost:5000/spring-internship/us-central1/app/api/upload/allUsergallery'
      )
      .then((response) => {
        // const someData = response.data.filter((data, index) => {
        //   return data.puid === "LeTR5YNzqBN2OJkg6qni44JblUv1";
        // });

        response.data.forEach((ele, index) => {
          setData((data) => [...data, ele]);
          setImage((image) => [...image, ele.images]);
        });
        setDataRecieved(true);
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

  // function printOne(values) {
  //   console.log(values);
  // }
  const landmarkValues = [...groupedLandmarks.values()];
  // console.log(landmarkValues);
  // console.log(landmarkValues.length);

  const singleLandmark = landmarkValues.filter((ele, index) => {
    return ele.length == 1;
  });
  // console.log(singleLandmark);

  const multipleLandmarks = landmarkValues.filter((ele, index) => {
    return ele.length > 1;
  });

  const HomeData = () => {
    return (
      <>
        {dataRecieved &&
          data.map((ele, index) => {
            if (ele.images) {
              return (
                <>
                  <br />
                  <Card style={{ color: 'black' }}>
                    <Card.Title style={{ textAlign: 'center' }}>
                      {ele.landmark}
                    </Card.Title>
                    <Link to={`/iuser/${ele.landmark}`}>
                      <Badge
                        pill
                        variant='success'
                        style={{ width: '50%', cursor: 'pointer' }}
                        onClick={() => {
                          setCurrLandmark(ele.landmark);
                        }}
                      >
                        {ele.landmark}
                      </Badge>{' '}
                    </Link>

                    <Card.Body>
                      <Card.Img
                        variant='top'
                        src={ele.images}
                        alt='something'
                        style={{ position: 'relative' }}
                      />
                      <Card.Text>{ele.names}</Card.Text>
                      <PopOver />
                    </Card.Body>
                  </Card>
                  <br />
                </>
              );
            }
          })}
      </>
    );
  };
  return (
    <Router>
      <Route path='/iuser' exact component={HomeData}></Route>
      <Route path='/iuser/:landmark'>
        <Landmark rawData={data} landmark={currLandmark} />
      </Route>
    </Router>
  );
}
