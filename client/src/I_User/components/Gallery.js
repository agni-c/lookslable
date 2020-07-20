import { allUserGallery } from '../../api';
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
  const [rawdata, setRawData] = useState([{}]);
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
    (async () => {
      const data = await allUserGallery();
      console.log(data);
      setRawData(data);
      const seen = new Set();
      const uniqueData = data.filter((el) => {
        const duplicate = seen.has(el.landmark);
        seen.add(el.landmark);
        return !duplicate;
      });
      console.log(uniqueData);

      uniqueData.forEach((ele, index) => {
        setData((data) => [...data, ele]);
        setImage((image) => [...image, ele.images]);
      });
      setDataRecieved(true);
    })();
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
                      {/* <PopOver puid={ele.puid} landmark={ele.landmark} /> */}
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
      <Route path='/iuser/:ldataandmark'>
        <Landmark rawData={rawdata} landmark={currLandmark} />
      </Route>
    </Router>
  );
}
