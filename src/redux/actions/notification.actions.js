export const SET_NOTIFICATION = 'SET_NOTIFICATION';

export const seNotification = (notification, entity) => ({
  type   : `${entity} ${SET_NOTIFICATION}`,
  payload: {
    data: notification,
    meta: entity
  }
});
