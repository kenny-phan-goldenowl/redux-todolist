import { legacy_createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import rootReducer from "./reducer";

const store = legacy_createStore(
	rootReducer,
	composeWithDevTools(applyMiddleware(thunkMiddleware))
);

export default store;
