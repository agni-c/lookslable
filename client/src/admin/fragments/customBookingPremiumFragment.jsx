import React, { useContext } from 'react';
import { BookingsAdminContext } from '../../context/bookingsAdmin';
import { PuserAdminContext } from '../../context/pUserAdmin';
import { IuserAdminContext } from '../../context/iUserAdmin';
import CircularProgress from '@material-ui/core/CircularProgress';
import { customBookingsPremiumAdminContext } from '../../context/customBookingsPremiumAdmin';

import MaterialTable from 'material-table';
import {} from '@material-ui/icons';
import {
  AssigningPUser,
  AssigningPUserCustomBooking,
  uploadAdminLinksCustom,
} from '../../api';
//import { useEffect } from "react";

export default function CustomBookingOPremiumFragment() {
  const [state, setState] = useContext(customBookingsPremiumAdminContext);

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

                      if (oldData.puid !== newData.puid) {
                        AssigningPUserCustomBooking(
                          newData.date,
                          newData.iuid,
                          newData.puid,
                          newData.PhoneNo
                        );
                      } else {
                        uploadAdminLinksCustom(
                          newData.date,
                          newData.iuid,
                          newData.link1,
                          newData.link2,
                          newData.link3,
                          newData.link4,
                          newData.link5,
                          newData.link6,
                          newData.link7,
                          newData.link8,
                          newData.link9,
                          newData.link10
                        );
                      }

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
