import React, { useContext } from 'react';
import { BookingsAdminContext } from '../../context/bookingsAdmin';
import { PuserAdminContext } from '../../context/pUserAdmin';
import { IuserAdminContext } from '../../context/iUserAdmin';
import CircularProgress from '@material-ui/core/CircularProgress';

import MaterialTable from 'material-table';
import {} from '@material-ui/icons';
import { AssigningPUser, uploadAdminLinks } from '../../api';
import { useEffect } from 'react';

export default function BookingFragment() {
  const [state, setState] = useContext(BookingsAdminContext);
  const [pData, setPData] = useContext(PuserAdminContext);
  const [iData, setIData] = useContext(IuserAdminContext);

  if (iData.data) {
    state.data.map((d) => {
      d.iname = iData.data.map((i) => {
        if (i.uid === d.iuid) {
          return i.name;
        }
      });
      // d.pname = pData.data.find((p) => p.uid === d.puid).name;
    });
  }

  // if (iData.data && state.data) {
  //   if (pData.data) {
  // state.data.map((d) => {
  //   d.iname = iData.data.find((i) => i.uid === d.iuid).name;
  //   d.pname = pData.data.find((p) => p.uid === d.puid).name;
  // });
  //   }0  // }
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
                      console.log('old data is' + oldData.puid);

                      if (oldData.puid !== newData.puid) {
                        AssigningPUser(
                          newData.bookingdate,
                          newData.iuid,
                          newData.puid,
                          newData.time
                        );
                      } else {
                        uploadAdminLinks(
                          newData.bookingdate,
                          newData.iuid,
                          newData.time,
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
