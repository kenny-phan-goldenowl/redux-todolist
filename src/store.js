import { applyMiddleware, legacy_createStore } from "redux";
import reducer from "./redux/reducers/reducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";

const persistConfig = {
	key: "root",
	storage,
};

const persistedReducer = persistReducer(persistConfig, reducer);

const store = legacy_createStore(
	persistedReducer,
	composeWithDevTools(applyMiddleware(thunk))
);
const persistor = persistStore(store);

export { store, persistor };
