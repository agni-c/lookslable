import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { iUserAdmin, iuserevent } from '../api';

export const IuserAdminContext = React.createContext();

export const IuserAdminProvider = ({ children }) => {
  const [state, setState] = useState({
    columns: [],
    data: [],
    loading: true,
  });

  useEffect(() => {
    (async () => {
      const data = await iUserAdmin();
      const columns = [
        { title: 'UID', field: 'uid' },
        { title: 'Name', field: 'name' },
        { title: 'Email', field: 'email' },
        { title: 'Photo', field: 'photoURL' },
        { title: 'Tags', field: 'tags' },
      ];

      setState({ columns, data, loading: false });
    })();
  }, []);
  return (
    <IuserAdminContext.Provider value={[state, setState]}>
      {children}
    </IuserAdminContext.Provider>
  );
};
