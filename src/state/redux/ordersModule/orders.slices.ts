import { createSlice } from "@reduxjs/toolkit";

const initialState = { };


const ordersSlice = createSlice({
  name: "ordersSlice",
  initialState: { },
  reducers: {
    actionRequested: (state, { payload }) => payload,
    actionFinished: (state, { payload }) => {
      console.log("payload ordersSlice", payload);
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
} = ordersSlice.actions;
const ordersReducer = ordersSlice.reducer;
export default ordersReducer;