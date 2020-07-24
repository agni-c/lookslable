import React, { useContext } from 'react';
import { BookingsAdminContext } from '../../context/bookingsAdmin';
import { PuserAdminContext } from '../../context/pUserAdmin';
import { IuserAdminContext } from '../../context/iUserAdmin';
import CircularProgress from '@material-ui/core/CircularProgress';
import { customBookingsAdminContext } from '../../context/customBookingAdmin';

import MaterialTable from 'material-table';
import {} from '@material-ui/icons';
import { AssigningPUser, AssigningPUserCustomBooking } from '../../api';
//import { useEffect } from "react";

export default function CustomBookingFragment() {
  const [state, setState] = useContext(customBookingsAdminContext);

  {
    console.log(state.data);
  }

  {
    if (state.loading === true || state.data === []) {
      return <CircularProgress />;
    } else {
      return (
        <MaterialTable
          title='Booking Details'
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
                      console.log(newData.bookingdate);
                      AssigningPUserCustomBooking(
                        newData.date,
                        newData.iuid,
                        newData.puid,
                        newData.PhoneNo
                      );
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
