import { all } from "redux-saga/effects";
import { authSagasFactory } from "./authModule/auth.sagas";

export function* rootSaga() {
  yield all([
    ...authSagasFactory()
  ]);
}