import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const IuserAdminContext = React.createContext();

export const IuserAdminProvider = ({ children }) => {
  const [state, setState] = useState({
    columns: [],
    data: [],
  });
  // console.log(state.data);

  const api = async () => {
    const response = await axios
      .get(
        'http://localhost:5000/spring-internship/us-central1/app/api/admin/iuserprofile'
      )
      .then(function (response) {
        return response;
      });
    const data = response.data;
    const columns = [
      { title: 'UID', field: 'uid' },
      { title: 'Name', field: 'name' },
      { title: 'Email', field: 'email' },
      { title: 'Photo', field: 'photoURL' },
      { title: 'Tags', field: 'tags' },
    ];
    setState({ columns, data });
  };

  useEffect(() => {
    api();
  }, []);
  return (
    <IuserAdminContext.Provider value={[state, setState]}>
      {children}
    </IuserAdminContext.Provider>
  );
};
