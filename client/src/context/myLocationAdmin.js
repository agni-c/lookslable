import { mylocation } from "../api";
import React, { useEffect, useContext, useState } from "react";
import axios from "axios";
// import ReactStars from 'react-rating-stars-component';
// import { PuserAdminContext } from '../context/pUserAdmin';
// import { IuserAdminContext } from '../context/iUserAdmin';

export const MyLocationAdminContext = React.createContext();

export const MyLocationAdminProvider = ({ children }) => {
  const [state, setState] = useState({
    vcolumns: [],
    vdata: [],
    vloading: true,
    pcolumns: [],
    pdata: [],
    ploading: true,
  });

  useEffect(() => {
    (async () => {
      const data = await mylocation();
      const vdata = [];
      vdata.push(data.Video);
      const vcolumns = [
        { title: "Basic First", field: "bfirst" },
        { title: "Basic Second", field: "bsecond" },
        { title: "Basic Third", field: "bthird" },
        { title: "Premium First", field: "pfirst" },
        { title: "Premium Second", field: "psecond" },
        { title: "Premium Third", field: "pthird" },
      ];
      const pdata = [];
      pdata.push(data.Photo);
      const pcolumns = [
        { title: "Basic First", field: "bfirst" },
        { title: "Basic Second", field: "bsecond" },
        { title: "Basic Third", field: "bthird" },
        { title: "Premium First", field: "pfirst" },
        { title: "Premium Second", field: "psecond" },
        { title: "Premium Third", field: "pthird" },
      ];
      setState({
        vcolumns: vcolumns,
        vdata: vdata,
        pcolumns: pcolumns,
        pdata: pdata,
      });
    })();
  }, []);
  return (
    <MyLocationAdminContext.Provider value={[state, setState]}>
      {children}
    </MyLocationAdminContext.Provider>
  );
};
