import { createSlice } from "@reduxjs/toolkit";

const initialState = { };


const authSlice = createSlice({
  name: "authSlice",
  initialState: initialState,
  reducers: {
    actionLoginRequested: (state, { payload }) => payload,
    actionLoginFinished: (state, { payload }) => {
      console.log("payload someSlice", payload);
      return {
        ...state,
        ...payload
      };
    },
    actionLoginFailed: (state, { payload }) => payload
  }
});

export const {
  actionLoginRequested,
  actionLoginFinished,
  actionLoginFailed
} = authSlice.actions;
const authReducer = authSlice.reducer;
export default authReducer;