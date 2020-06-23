import React, { useEffect, useContext, useState } from 'react';
import axios from 'axios';

export const BookingsAdminContext = React.createContext();

export const BookingsAdminProvider = ({ children }) => {
  const [state, setState] = useState({
    columns: [],
    data: [],
    loading: true,
  });

  const api = async () => {
    const response = await axios
      .get(
        'http://localhost:5000/spring-internship/us-central1/app/api/admin/bookingdetails'
      )
      .then(function (response) {
        setState({ loading: false });
        return response;
      });
    const data = Object.values(response.data);
    // data.map((tile) => {

    // data.map((d) => {
    //   d.iname = iData.data.map((i) => {
    //     if (d.iuid === i.uid) {
    //       return i.name;
    //     }
    //   })[0];
    //   d.pname = pData.data.map((p) => {
    //     if (d.puid === p.uid) {
    //       return p.name;
    //     }
    //   });
    // });

    // console.log(data[0]);

    // });
    const columns = [
      { title: 'IUID', field: 'iuid' },
      // { title: 'Iname', field: 'iname' },
      { title: 'PUID', field: 'puid' },
      // { title: 'Pname', field: 'pname' },
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
