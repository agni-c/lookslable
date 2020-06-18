import React, { useEffect, useState } from 'react';
import axios from 'axios';

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
  });
  // console.log(state.data);

  const api = async () => {
    const response = await axios
      .get(
        'http://localhost:5000/spring-internship/us-central1/app/api/admin/puserprofile'
      )
      .then(function (response) {
        return response;
      });
    const data = response.data;
    const columns = [
      { title: 'UID', field: 'uid', type: 'string' },
      { title: 'Name', field: 'name' },
      { title: 'Email', field: 'email' },
    ];
    setState({ columns, data });
  };

  useEffect(() => {
    api();
  }, []);
  return (
    <PuserAdminContext.Provider value={[state, setState]}>
      {children}
    </PuserAdminContext.Provider>
  );
};