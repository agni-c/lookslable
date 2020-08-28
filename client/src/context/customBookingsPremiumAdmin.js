import { customBookingPremiumDetails } from '../api';
import React, { useEffect, useContext, useState } from 'react';
import axios from 'axios';
import ReactStars from 'react-rating-stars-component';
import { PuserAdminContext } from '../context/pUserAdmin';
import { IuserAdminContext } from '../context/iUserAdmin';

export const customBookingsPremiumAdminContext = React.createContext();

export const CustomBookingsPremiumAdminProvider = ({ children }) => {
  const [state, setState] = useState({
    columns: [],
    data: [],
    loading: true,
  });

  useEffect(() => {
    (async () => {
      const response = await customBookingPremiumDetails();
      const data = Object.values(response);
      const columns = [
        { title: 'PUID', field: 'puid' },
        { title: 'Name', field: 'name' },
        { title: 'Contact No', field: 'PhoneNo' },
        { title: 'Booking Date', field: 'date' },
        { title: 'Address', field: 'address' },
        { title: 'Photos/Video', field: 'key1' },
        { title: 'Basic/Primium', field: 'key2' },
        { title: 'Lat', field: 'lat' },
        { title: 'Lon', field: 'lon' },
        {
          title: 'Rating',
          field: 'rating',
          render: (data) => (
            <ReactStars value={data.rating} edit={false} size={20} />
          ),
        },

        {
          title: 'Drive Link',
          field: 'driveLink',
          render: (data) => <a href={data.driveLink}>{data.driveLink}</a>,
        },
        {
          title: 'Link',
          field: 'link',
          render: (data) => <a href={data.link}>{data.link}</a>,
        },
        {
          title: 'Date 1',
          field: 'date1',
        },
        {
          title: 'Value 1',
          field: 'value1',
        },
        {
          title: 'Date 2',
          field: 'date2',
        },
        {
          title: 'Value 2',
          field: 'value2',
        },
        {
          title: 'Date 3',
          field: 'date3',
        },
        {
          title: 'Value 3',
          field: 'value3',
        },
        {
          title: 'Date 4',
          field: 'date4',
        },
        {
          title: 'Value 4',
          field: 'value4',
        },
        {
          title: 'Date 5',
          field: 'date5',
        },
        {
          title: 'Value 5',
          field: 'value5',
        },
      ];
      setState({ columns, data });
    })();
  }, []);
  return (
    <customBookingsPremiumAdminContext.Provider value={[state, setState]}>
      {children}
    </customBookingsPremiumAdminContext.Provider>
  );
};
