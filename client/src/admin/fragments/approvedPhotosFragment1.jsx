import React, { useEffect, useState } from 'react';
import axios from 'axios';

import './photos.css';

const ApprovedPhotos = () => {
  const [tileData, setTileData] = useState([]);

  const api = async () => {
    const response = await axios
      .get(
        'http://localhost:5000/spring-internship/us-central1/app/api/admin/approved-photos'
      )
      .then(function (response) {
        return response;
      });
    const tileData = response.data[0];
    console.log(tileData[0]);
    setTileData(tileData[0]);
  };

  useEffect(() => {
    api();
  }, []);

  return (
    <div
      className='container'
      style={{ display: 'flex', flexDirection: 'row' }}
    >
      {tileData.map((tile) => (
        <div className='gallery-container'>
          <div className='images'>
            <img
              src={tile.images}
              alt={tile.names}
              style={{ height: '200px', width: '200px' }}
            />
            {/* <h5>{tile.names}</h5> */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ApprovedPhotos;
