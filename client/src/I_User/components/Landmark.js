import React, { useState } from 'react';
import { Card, Badge } from 'react-bootstrap';

const Landmark = ({ rawData, landmark }) => {
  const [showLandmark, setShowLandmark] = useState([]);

  const currentLandmarks = rawData.filter((ele, index) => {
    return ele.landmark === landmark;
  });
  console.log(currentLandmarks);
  return (
    <>
      <br />
      {currentLandmarks.map((ele, index) => {
        return (
          <>
            <Card style={{ color: 'black' }}>
              {/* <Link to={`/iuser/${ele.landmark}`}> */}
              {/* <Badge
                pill
                variant="success"
                style={{ width: "50%", cursor: "pointer" }}
              >
                {ele.landmark}
              </Badge>{" "} */}
              {/* </Link> */}
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
      })}
    </>
  );
};

export default Landmark;
