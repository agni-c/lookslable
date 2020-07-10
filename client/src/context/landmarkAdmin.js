import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { landmarkDetails } from '../api';
export const LandmarkAdminContext = React.createContext();

export const LandmarkAdminProvider = ({ children }) => {
  const [state, setState] = useState({
    columns: [],
    data: [],
    loading: true,
  });

  useEffect(() => {
    (async () => {
      const data = await landmarkDetails();
      const columns = [
        { title: 'UUID', field: 'uuid' },
        { title: 'PUID', field: 'puid' },
        { title: 'Landmark', field: 'landmark' },
        { title: 'Price', field: 'price' },
        {
          title: 'Location',
          field: 'locationLink',
          render: (data) => <a href={data.locationLink}>{data.locationLink}</a>,
        },
      ];

      setState({ columns, data, loading: false });
    })();
  }, []);
  return (
    <LandmarkAdminContext.Provider value={[state, setState]}>
      {children}
    </LandmarkAdminContext.Provider>
  );
};
