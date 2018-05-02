import {SET_NOTIFICATION} from "../actions/notification.actions";

export const notificationsReducer = (notifications = [], action) => {
  switch (true) {

    case action.type.includes(SET_NOTIFICATION):
      return [...notifications, action.payload];

    default:
      return notifications;
  }
};
