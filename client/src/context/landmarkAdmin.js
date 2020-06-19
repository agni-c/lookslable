import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const LandmarkAdminContext = React.createContext();

export const LandmarkAdminProvider = ({ children }) => {
  const [state, setState] = useState({
    columns: [],
    data: [],
    loading: true,
  });

  const api = async () => {
    const response = await axios
      .get(
        'http://localhost:5000/spring-internship/us-central1/app/api/admin/landmarkdetails'
      )
      .then(function (response) {
        setState({ loading: false });
        return response;
      });
    const data = Object.values(response.data);

    const columns = [
      { title: 'UUID', field: 'uuid' },
      { title: 'PUID', field: 'puid' },
      { title: 'Landmark', field: 'landmark' },
      { title: 'Price', field: 'price' },
    ];
    setState({ columns, data });
  };

  useEffect(() => {
    api();
  }, []);
  return (
    <LandmarkAdminContext.Provider value={[state, setState]}>
      {children}
    </LandmarkAdminContext.Provider>
  );
};
