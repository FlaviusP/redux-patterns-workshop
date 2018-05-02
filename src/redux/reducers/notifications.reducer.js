import {SET_NOTIFICATION} from "../actions/notification.actions";

export const notificationsReducer = (notifications = [], action) => {
  switch (action.type) {

    case SET_NOTIFICATION:
      return [...notifications, action.payload];

    default:
      return notifications;
  }
};
