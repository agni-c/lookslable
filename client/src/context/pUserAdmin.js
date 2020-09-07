import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { pUserProfile } from '../api';
import ReactStars from 'react-rating-stars-component';

export const PuserAdminContext = React.createContext();

export const PuserAdminProvider = ({ children }) => {
  const [state, setState] = useState({
    columns: [],
    data: [],
    loading: true,
  });
  useEffect(() => {
    (async () => {
      const data = await pUserProfile();
      const columns = [
        { title: 'UID', field: 'uid', type: 'string' },
        { title: 'Name', field: 'name' },
        { title: 'Email', field: 'email' },
        { title: 'Phone Number', field: 'phoneNo' },
        {
          title: 'Average Rating',
          field: 'avgRating',
          render: (data) => (
            <ReactStars value={data.avgRating} edit={false} size={30} />
          ),
        },
      ];
      setState({ columns, data, loading: false });
    })();
  }, []);
  return (
    <PuserAdminContext.Provider value={[state, setState]}>
      {children}
    </PuserAdminContext.Provider>
  );
};
