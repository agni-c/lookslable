import React, { useEffect, useReducer, useContext } from "react";

export const PuserAdminContext = React.createContext();

export const PuserAdminProvider = ({ children }) => {
	const defaultValues = {
		data: "",
	};

	return (
		<PuserAdminContext.Provider value={{}}>
			{children}
		</PuserAdminContext.Provider>
	);
};

export default PuserAdmin;
