import { createSlice } from "@reduxjs/toolkit";
import { notification } from "antd";

export type notificationObject = {
  type: string,
  message: string
}

export interface notificationSliceState {
  notifications: notificationObject[];
}

const initialState: notificationSliceState = { notifications: [] };


const notificationsSlice = createSlice({
  name: "notificationsSlice",
  initialState: initialState,
  reducers: {
    appActionError: (state, action) => {
      const notificationMessage = action.payload;
      state.notifications.push({
        message: notificationMessage.message,
        type: 'error'
      });
      notification.error({
        message: 'error',
        description:
          notificationMessage.payload,
      });

    },

    appActionSuccess: (state, action) => {
      const notificationMessage = action.payload

      state.notifications.push({
        message: notificationMessage.message,
        type: 'success'
      });
      notification.success({
        message: 'success',
        description:
          notificationMessage.message,
      });
    },

    appActionWarning: (state, action) => {
      const notificationMessage = action.payload

      state.notifications.push({
        message: notificationMessage.message,
        type: 'warning'
      });
      notification.warning({
        message: 'warning',
        description:
          notificationMessage.message,
      });
    },

  }
});

export const {
  appActionError,
  appActionSuccess,
  appActionWarning
} = notificationsSlice.actions;

const notificationSlice = notificationsSlice.reducer;
export default notificationSlice;