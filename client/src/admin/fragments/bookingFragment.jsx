import React, { useContext } from 'react';
import { BookingsAdminContext } from '../../context/bookingsAdmin';
import { PuserAdminContext } from '../../context/pUserAdmin';
import { IuserAdminContext } from '../../context/iUserAdmin';
import CircularProgress from '@material-ui/core/CircularProgress';
import MaterialTable from 'material-table';
import {} from '@material-ui/icons';
import { useEffect } from 'react';

export default function BookingFragment() {
  const [state, setState] = useContext(BookingsAdminContext);
  const [pData, setPData] = useContext(PuserAdminContext);
  const [iData, setIData] = useContext(IuserAdminContext);

  // console.log(pData.data);
  // console.log(iData.data);
  // useEffect(() => {

  // }, []);
  // var pdata;
  // var idata;
  // var data;

  // if (state.data === undefined || state.data === []) {
  //   state.loading = true;
  // } else {
  //   data = state.data;
  // }
  // if (iData.data === undefined || iData.data === []) {
  //   state.loading = true;
  // } else {
  //   idata = iData.data;
  // }
  // if (pData.data === undefined || pData.data === []) {
  //   state.loading = true;
  // } else {
  //   pdata = pData.data;
  // }

  // {
  //   if (data === []) {
  //     if (pdata === []) {
  //       if (idata === []) {
  //         state.loading = true;
  //       }
  //     }
  //   } else {

  //   }
  // }

  const dataFetch = async () => {
    if (state) {
      const data = await state.data;
      const idata = await iData.data;
      const pdata = await pData.data;
      // console.log(data);
      // console.log(idata);
      // console.log(pdata);

      if (idata) {
      }
      data.map((e) => {
        e.iuid = idata.map((i) => {
          if (e.iuid === i.uid) return i.name;
        });
      });
      if (pdata) {
      }
      data.map((e) => {
        e.puid = pdata.map((p) => {
          if (e.puid === p.uid) return p.name;
        });
      });
    }
  };

  useEffect(() => {
    dataFetch();
  }, []);
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
