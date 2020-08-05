import { bookingDetails } from '../api';
import React, { useEffect, useContext, useState } from 'react';
import axios from 'axios';
import ReactStars from 'react-rating-stars-component';
import { PuserAdminContext } from '../context/pUserAdmin';
import { IuserAdminContext } from '../context/iUserAdmin';

export const BookingsAdminContext = React.createContext();

export const BookingsAdminProvider = ({ children }) => {
  const [state, setState] = useState({
    columns: [],
    data: [],
    loading: true,
  });
  const [pData, setPData] = useContext(PuserAdminContext);
  const [iData, setIData] = useContext(IuserAdminContext);

  useEffect(() => {
    (async () => {
      const data = await bookingDetails();

      const columns = [
        // { title: "IUID", field: "iuid" },
        //   { title: "IuserLink", field: "link" },

        { title: 'Iname', field: 'iname' },
        { title: 'PUID', field: 'puid' },
        { title: 'Pname', field: 'pname' },
        { title: 'Contact No', field: 'phoneNo' },
        { title: 'Booking Date', field: 'bookingdate' },
        { title: 'Price', field: 'price' },

        {
          title: 'Rating',
          field: 'rating',
          render: (data) => (
            <ReactStars value={data.rating} edit={false} size={20} />
          ),
        },
        { title: 'Number of Users', field: 'numberOfUsers' },
        {
          title: 'Drive Link',
          field: 'driveLink',
          render: (data) => <a href={data.driveLink}>{data.driveLink}</a>,
        },
        {
          title: 'Iuser Link',
          field: 'link',
          render: (data) => <a href={data.link}>{data.link}</a>,
        },
        {
          title: 'link1',
          field: 'link1',
          render: (data) => <a href={data.link1}>{data.link1}</a>,
        },
        {
          title: 'link2',
          field: 'link2',
          render: (data) => <a href={data.link2}>{data.link2}</a>,
        },
        {
          title: 'link3',
          field: 'link3',
          render: (data) => <a href={data.link3}>{data.link3}</a>,
        },
        {
          title: 'link4',
          field: 'link4',
          render: (data) => <a href={data.link4}>{data.link4}</a>,
        },
        {
          title: 'link5',
          field: 'link5',
          render: (data) => <a href={data.link5}>{data.link5}</a>,
        },
        {
          title: 'link6',
          field: 'link6',
          render: (data) => <a href={data.link6}>{data.link6}</a>,
        },
        {
          title: 'link7',
          field: 'link7',
          render: (data) => <a href={data.link7}>{data.link7}</a>,
        },
        {
          title: 'link8',
          field: 'link8',
          render: (data) => <a href={data.link8}>{data.link8}</a>,
        },
        {
          title: 'link9',
          field: 'link9',
          render: (data) => <a href={data.link9}>{data.link9}</a>,
        },
        {
          title: 'link10',
          field: 'link10',
          render: (data) => <a href={data.link10}>{data.link10}</a>,
        },
      ];
      setState({ columns, data });
    })();
  }, []);
  return (
    <BookingsAdminContext.Provider value={[state, setState]}>
      {children}
    </BookingsAdminContext.Provider>
  );
};
