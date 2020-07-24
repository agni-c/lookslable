import { customBookingDetails } from '../api';
import React, { useEffect, useContext, useState } from 'react';
import axios from 'axios';
import ReactStars from 'react-rating-stars-component';
import { PuserAdminContext } from '../context/pUserAdmin';
import { IuserAdminContext } from '../context/iUserAdmin';

export const customBookingsAdminContext = React.createContext();

export const CustomBookingsAdminProvider = ({ children }) => {
  const [state, setState] = useState({
    columns: [],
    data: [],
    loading: true,
  });

  useEffect(() => {
    (async () => {
      const response = await customBookingDetails();
      const data = Object.values(response);
      const columns = [
        // { title: "IUID", field: "iuid" },
        //{ title: "Iname", field: "iname" },
        //{ title: "PUID", field: "puid" },
        //{ title: "Pname", field: "pname" },
        { title: 'PUID', field: 'puid' },
        { title: 'Name', field: 'name' },
        { title: 'Contact No', field: 'PhoneNo' },
        { title: 'Booking Date', field: 'date' },
        { title: 'Address', field: 'address' },
        { title: 'Photos/Video', field: 'key1' },
        { title: 'Basic/Primium', field: 'key2' },
        { title: 'Lat', field: 'lat' },
        { title: 'Lon', field: 'lon' },
      ];
      setState({ columns, data });
    })();
  }, []);
  return (
    <customBookingsAdminContext.Provider value={[state, setState]}>
      {children}
    </customBookingsAdminContext.Provider>
  );
};
