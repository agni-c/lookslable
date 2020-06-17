import React, { useState, createContext } from 'react';
import axios from 'axios';

export const UserContext = createContext();

const PuserProvider = (props) => {
  const [user, setUser] = useState([]);
  const response = axios
    // .get(
    //   'http://localhost:5000/spring-internship/us-central1/app/api/admin/approved-photos'
    // )
    .then(function (response) {
      return response;
    });
  const userData = response.data;
  console.log(userData);
  setUser(userData);
  return <UserContext.Provider>{props.children}</UserContext.Provider>;
};

export { PuserProvider };
// };
