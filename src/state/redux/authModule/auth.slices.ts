import { createSlice } from "@reduxjs/toolkit";

const initialState = {};


const someSlice = createSlice({
  name: "someSlice",
  initialState: {},
  reducers: {
    actionRequested: (state, { payload }) => payload,
    actionFinished: (state, { payload }) => {
      console.log("payload someSlice", payload);
      return {
        ...state,
        ...payload
      };
    },
    actionFailed: (state, { payload }) => payload
  }
});

export const {
  actionRequested,
  actionFinished,
  actionFailed
} = someSlice.actions;
const someReducer = someSlice.reducer;
export default someReducer;