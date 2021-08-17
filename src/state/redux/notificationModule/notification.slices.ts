import { createSlice } from "@reduxjs/toolkit";

const initialState = { notification: [] };


const notificationsSlice = createSlice({
  name: "notificationsSlice",
  initialState: initialState,
  reducers: {
    appActionError: (state, { payload }) => {
      const alertObj = { type: 'Error', payload: payload };
      return {
        ...state,
        alertObj
      };
    },

    appActionSuccess: (state, { payload }) => {
      const alertObj = { type: 'success', payload: payload };
      return {
        ...state,
        alertObj
      };
    },

    appActionWarning: (state, { payload }) => {
      const alertObj = { type: 'warning', payload: payload };
      return {
        ...state,
        alertObj
      };
    }
  }
});

export const {
  appActionError,
  appActionSuccess,
  appActionWarning
} = notificationsSlice.actions;
const notificationSlice = notificationsSlice.reducer;
export default notificationSlice;