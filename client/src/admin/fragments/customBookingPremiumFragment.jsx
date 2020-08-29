import React, { useContext } from "react";
import { BookingsAdminContext } from "../../context/bookingsAdmin";
import { PuserAdminContext } from "../../context/pUserAdmin";
import { IuserAdminContext } from "../../context/iUserAdmin";
import CircularProgress from "@material-ui/core/CircularProgress";
import { customBookingsPremiumAdminContext } from "../../context/customBookingsPremiumAdmin";

import MaterialTable from "material-table";
import {} from "@material-ui/icons";
import {
  AssigningPUser,
  AssigningPUserCustomBooking,
  uploadAdminLinksCustom,
  graphDetails,
} from "../../api";
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
          title="Booking Details"
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
                        graphDetails(
                          newData.iuid,
                          newData.date,
                          newData.PhoneNo,
                          newData.date1,
                          newData.date2,
                          newData.date3,
                          newData.date4,
                          newData.date5,
                          newData.value1,
                          newData.value2,
                          newData.value3,
                          newData.value4,
                          newData.value5,
                          newData.agegroup,
                          newData.sex,
                          newData.location
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
