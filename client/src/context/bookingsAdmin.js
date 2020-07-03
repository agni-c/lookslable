import { bookingDetails } from "../api";
import React, { useEffect, useContext, useState } from "react";
import axios from "axios";

export const BookingsAdminContext = React.createContext();

export const BookingsAdminProvider = ({ children }) => {
  const [state, setState] = useState({
    columns: [],
    data: [],
    loading: true,
  });

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
