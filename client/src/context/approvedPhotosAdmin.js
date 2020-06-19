import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const ApprovedPhotosAdminContext = React.createContext();

export const ApprovedPhotoAdminProvider = ({ children }) => {
  const [tileData, setTileData] = useState([]);
  const api = async () => {
    const response = await axios
      .get(
        'http://localhost:5000/spring-internship/us-central1/app/api/admin/approved-photos'
      )
      .then(function (response) {
        return response;
      });
    const data = response.data;
    setTileData(data);
  };

  useEffect(() => {
    api();
  }, []);
  return (
    <ApprovedPhotosAdminContext.Provider value={[tileData, setTileData]}>
      {children}
    </ApprovedPhotosAdminContext.Provider>
  );
};
