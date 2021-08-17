import { createSelector } from "reselect";
import { notificationObject } from "./notification.slices";


const notificationSelector = (state: notificationObject[]) => state;

export const notificationsSelector = createSelector(notificationSelector, items =>
  items
);