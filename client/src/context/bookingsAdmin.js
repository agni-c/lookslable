import { bookingDetails } from "../api";
import React, { useEffect, useContext, useState } from "react";
import axios from "axios";
import { PuserAdminContext } from "../context/pUserAdmin";
import { IuserAdminContext } from "../context/iUserAdmin";

export const BookingsAdminContext = React.createContext();

export const BookingsAdminProvider = ({ children }) => {
  const [state, setState] = useState({
    columns: [],
    data: [],
    loading: true,
  });
  const [pData, setPData] = useContext(PuserAdminContext);
  const [iData, setIData] = useContext(IuserAdminContext);

  useEffect(() => {
    (async () => {
      const data = await bookingDetails();
      const columns = [
        // { title: "IUID", field: "iuid" },
        { title: "Iname", field: "iname" },
        { title: "PUID", field: "puid" },
        { title: "Pname", field: "pname" },
        { title: "Contact No", field: "phoneNo" },
        { title: "Booking Date", field: "bookingdate" },
        { title: "Price", field: "price" },
        { title: "Number of Users", field: "numberOfUsers" },
        {
          title: "Drive Link",
          field: "driveLink",
          render: (data) => <a href={data.driveLink}>{data.driveLink}</a>,
        },
      ];
      setState({ columns, data });
    })();
  }, []);
  return (
    <BookingsAdminContext.Provider value={[state, setState]}>
      {children}
    </BookingsAdminContext.Provider>
  );
};
