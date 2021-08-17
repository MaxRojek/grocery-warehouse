import { createSelector } from "reselect";

const notificationSelector = (state: any) => state.notification;

export const subtotalSelector = createSelector(notificationSelector, items =>
  items
);