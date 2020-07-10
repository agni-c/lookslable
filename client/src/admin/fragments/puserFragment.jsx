import React, { useContext, useState } from 'react';
import { PuserAdminContext } from '../../context/pUserAdmin';
import MaterialTable from 'material-table';
import CircularProgress from '@material-ui/core/CircularProgress';

import {} from '@material-ui/icons';
import { BookingsAdminContext } from '../../context/bookingsAdmin';

export default function PuserFragment() {
  const [state, setState] = useContext(PuserAdminContext);
  const [bState, setBState] = useContext(BookingsAdminContext);

  // const [rating,setRating] = useState(null);
  {
    // console.log('Hello Mr');

    if (state.data && bState.data) {
      state.data.map((d) => {
        let avg = 0;
        let count = 0;
        bState.data.map((b) => {
          if (d.uid === b.puid) {
            avg = avg + b.rating;
            count++;
          }
          //   else{
          // 	  return 0;
          //   }
        });
        d.avgRating = avg / count;
        console.log(d.rating);
      });
    }
  }

  {
    if (state.loading === true) {
      // return <CircularProgress></CircularProgress>;
      // console.log(state.loading);

      return <CircularProgress />;
    } else {
      return (
        <MaterialTable
          title='P User Data'
          columns={state.columns}
          data={state.data}
          editable={{
            onRowAdd: (newData) =>
              new Promise((resolve) => {
                setTimeout(() => {
                  resolve();
                  setState((prevState) => {
                    const data = [...prevState.data];
                    data.push(newData);
                    return { ...prevState, data };
                  });
                }, 600);
              }),
            onRowUpdate: (newData, oldData) =>
              new Promise((resolve) => {
                setTimeout(() => {
                  resolve();
                  if (oldData) {
                    setState((prevState) => {
                      const data = [...prevState.data];
                      data[data.indexOf(oldData)] = newData;
                      return { ...prevState, data };
                    });
                  }
                }, 600);
              }),
            onRowDelete: (oldData) =>
              new Promise((resolve) => {
                setTimeout(() => {
                  resolve();
                  setState((prevState) => {
                    const data = [...prevState.data];
                    data.splice(data.indexOf(oldData), 1);
                    return { ...prevState, data };
                  });
                }, 600);
              }),
          }}
        />
      );
    }
  }
}
