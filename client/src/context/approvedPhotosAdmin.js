import { approvedPhotos } from "../api";
import React, { useEffect, useState } from "react";
import axios from "axios";

export const ApprovedPhotosAdminContext = React.createContext();

export const ApprovedPhotoAdminProvider = ({ children }) => {
  const [tileData, setTileData] = useState({
    tiledata: [],
    loading: true,
  });
  // const api = async () => {
  // 	const response = await axios
  // 		.get(
  // 			"http://localhost:5000/spring-internship/us-central1/app/api/admin/approved-photos"
  // 		)
  // 		.then(function (response) {
  // 			setTileData({ ...tileData, loading: false });
  // 			return response;
  // 		});
  // 	const data = response.data;
  // 	setTileData({ tiledata: data, loading: false });
  // };

  useEffect(() => {
    (async () => {
      const data = await approvedPhotos();
      console.log(data);
      // setTileData({ ...tileData, loading: false });
      setTileData({ tiledata: data, loading: false });
    })();
  }, []);
  return (
    <ApprovedPhotosAdminContext.Provider value={[tileData, setTileData]}>
      {children}
    </ApprovedPhotosAdminContext.Provider>
  );
};
