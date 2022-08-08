import { combineReducers } from "redux";
import * as allReducers from "./redux/reducers";

const appReducer = combineReducers(allReducers);

const rootReducer = (state, action) => {
	if (action.type === "AUTH_LOGOUT") {
		state = undefined;
	}
	return appReducer(state, action);
};

export default rootReducer;
