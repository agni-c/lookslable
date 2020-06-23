import React, { useContext } from 'react';
import { IuserAdminContext } from '../../context/iUserAdmin';
import CircularProgress from '@material-ui/core/CircularProgress';
import MaterialTable from 'material-table';
import {} from '@material-ui/icons';

export default function IuserFragment() {
  const [state, setState] = useContext(IuserAdminContext);
  {
    if (state.loading === true) {
      return <CircularProgress />;
    } else {
      return (
        <MaterialTable
          title='I User Data'
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
