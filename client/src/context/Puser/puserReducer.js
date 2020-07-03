import { SET_PUSER } from "./../action.types";

export default (state, action) => {
	switch (action.type) {
		case SET_PUSER:
			return {
				...state,
				data: action.payload,
			};
		default:
			return state;
	}
};
