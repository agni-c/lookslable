import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { pUserProfile } from '../api';
import ReactStars from 'react-rating-stars-component';

export const PuserAdminContext = React.createContext();

// const defaultValues = {
//   error: 'Default',
//   data: {},
// };

// const reducer = (state, action) => {
//   switch (action.type) {
//     case 'FETCH_SUCCESS':
//       return { ...state, data: action.payload };
//     case 'FETCH_ERROR':
//       return { error: 'Something Went Wrong', data: {} };
//     default:
//       return state;
//   }
// };
export const PuserAdminProvider = ({ children }) => {
  const [state, setState] = useState({
    columns: [],
    data: [],
    loading: true,
  });
  // console.log(state.data);

  // const api = async () => {
  //   const response = await axios
  //     .get(
  //       'http://localhost:5000/spring-internship/us-central1/app/api/admin/puserprofile'
  //     )
  //     .then(function (response) {
  //       setState({ loading: false });
  //       return response;
  //     });
  //   const data = response.data;
  //   const columns = [
  //     { title: 'UID', field: 'uid', type: 'string' },
  //     { title: 'Name', field: 'name' },
  //     { title: 'Email', field: 'email' },
  //   ];
  //   setState({ columns, data });
  // };

  useEffect(() => {
    (async () => {
      const data = await pUserProfile();
      const columns = [
        { title: 'UID', field: 'uid', type: 'string' },
        { title: 'Name', field: 'name' },
        { title: 'Email', field: 'email' },
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
