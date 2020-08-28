import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { mylocation } from '../../api';
// import { iUserAdmin, iuserevent } from "../api";

export const LocationDataContext = React.createContext();

export const LocationDataProvider = ({ children }) => {
  const [state, setState] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    (async () => {
      const data = await mylocation();
      setState({ data, loading: false });
      if (state.loading === false) {
        console.log(state.data);
      }
    })();
  }, []);
  return (
    <LocationDataContext.Provider value={[state, setState]}>
      {children}
    </LocationDataContext.Provider>
  );
};
