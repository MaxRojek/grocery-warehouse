import { all, put, takeEvery, delay, call, takeLatest } from "redux-saga/effects";
import { actionRequested, actionFinished, actionFailed } from "./orders.slices";
import { getOrdersAction } from "./orders.actions";
import { login } from './orders.apiService'
//import { TuserDataFromFrom, TupdUserData } from "../typings/typings";
// const fetchData = (argUserData: TupdUserData) => async <T>(): Promise<T> =>
//   axios.post("https://conduit.productionready.io/api/users/login", argUserData);

export const authSagasFactory = () => [
  watchFunc()
];


function* ordersEffect(argUserData: { type?: string; payload: any }) {
  console.log("argUserData", argUserData);
  const respond = login();
  console.log(respond);
  // yield delay(1000);
  // yield put(actionRequested("loading"));
  // yield;
  // try {
  //   yield delay(1000);
  //   const { payload } = argUserData;
  //   const updUser: TupdUserData = {
  //     user: {
  //       ...payload
  //     }
  //   };
  //   console.log("updUser", updUser);
  //   const response = yield call(fetchData(updUser));
  //   console.log("response", response);
  //   yield put(actionFinished(response.data));
  // } catch {
  //   yield put(actionFailed("error"));
  // }
}

function* watchFunc() {
  yield takeLatest(getOrdersAction.type, ordersEffect);
}

// export default function* authSaga() {
//   yield all([watchFunc()]);
// }