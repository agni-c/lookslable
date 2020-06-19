import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const BookingsAdminContext = React.createContext();

export const BookingsAdminProvider = ({ children }) => {
  const [state, setState] = useState({
    columns: [],
    data: [],
  });

  const api = async () => {
    const response = await axios
      .get(
        'http://localhost:5000/spring-internship/us-central1/app/api/admin/bookingdetails'
      )
      .then(function (response) {
        return response;
      });
    const data = Object.values(response.data);
    console.log(data);

    const columns = [
      { title: 'IUID', field: 'iuid' },
      { title: 'PUID', field: 'puid' },
      { title: 'Booking Date', field: 'bookingdate' },
      { title: 'Price', field: 'price' },
      { title: 'Number of Users', field: 'numberOfUsers' },
    ];
    setState({ columns, data });
  };

  useEffect(() => {
    api();
  }, []);
  return (
    <BookingsAdminContext.Provider value={[state, setState]}>
      {children}
    </BookingsAdminContext.Provider>
  );
};
