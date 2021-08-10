import {
  combineReducers,
  configureStore,
} from "@reduxjs/toolkit";
import someSlice from "./authModule/auth.slices";
import createSaga from "redux-saga";
import rootSaga from "./authModule/auth.sagas";

const rootReducer = combineReducers({
  someSlice
});

const sagaMiddleware = createSaga();
const middleware = [sagaMiddleware];

const store = configureStore({
  reducer: rootReducer,
  middleware
});

sagaMiddleware.run(rootSaga);

export default store;