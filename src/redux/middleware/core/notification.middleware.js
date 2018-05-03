import {
  removeNotification,
  SET_NOTIFICATION,
  setNotification
} from "../../actions/notification.actions";

export const notificationMiddleware = () => (next) => (action) => {

  if (action.type.includes(SET_NOTIFICATION)) {
    const {data, meta} = action;
    const id           = new Date().getMilliseconds();

    const notification = {
      id,
      massage: data
    };

    next(setNotification(notification, meta.entity));

    setTimeout(() => next(removeNotification(id, meta.entity)), 5000)
  } else {
    next(action)
  }
};

