import {
  combineReducers,
  configureStore,
} from "@reduxjs/toolkit";
import authSlice from "./authModule/auth.slices";
import notificationSlice from "./notificationModule/notification.slices";
import createSaga from "redux-saga";
import { rootSaga } from "./root-sagas";
import { saveState } from "../services/localStorage";


const rootReducer = combineReducers({
  authSlice,
  notificationSlice
});

const sagaMiddleware = createSaga();
const middleware = [sagaMiddleware];

const store = configureStore({
  reducer: rootReducer,
  middleware
});

sagaMiddleware.run(rootSaga);

// store.subscribe(() => {
//   saveState({
//     auth: store.getState().auth
//   });
// });

export default store;