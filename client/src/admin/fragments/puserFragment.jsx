import React, { useEffect } from 'react';
import axios from 'axios';
import MaterialTable from 'material-table';
import {} from '@material-ui/icons';

export default function PuserFragment() {
  const [state, setState] = React.useState({
    columns: [],
    data: [],
  });

  const api = async () => {
    const response = await axios
      .get(
        'http://localhost:5000/spring-internship/us-central1/app/api/admin/puserprofile'
      )
      .then(function (response) {
        return response;
      });
    const data = response.data;
    const columns = [
      { title: 'UID', field: 'uid', type: 'string' },
      { title: 'Name', field: 'name' },
      { title: 'Email', field: 'email' },
    ];
    setState({ columns, data });
  };

  useEffect(() => {
    api();
  }, []);
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
