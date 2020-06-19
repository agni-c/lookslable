import React, { useContext } from 'react';
import { BookingsAdminContext } from '../../context/bookingsAdmin';
import CircularProgress from '@material-ui/core/CircularProgress';
import MaterialTable from 'material-table';
import {} from '@material-ui/icons';

export default function BookingFragment() {
  const [state, setState] = useContext(BookingsAdminContext);

  {
    if (state.loading === true) {
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
