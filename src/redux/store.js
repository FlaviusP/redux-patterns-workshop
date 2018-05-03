import {applyMiddleware, compose, createStore, combineReducers} from 'redux';
import {DevTools} from '../ui/DevTool';

// reducers
import {booksReducer} from "./reducers/application/books.reducer";
import {notificationsReducer} from "./reducers/application/notifications.reducer";
import {uiReducer} from "./reducers/application/ui.reducer";

// meta reducers
import {undoable} from "./reducers/meta/undoable.reducer";
import {stateFreezer} from "./reducers/meta/stateFreezer.reducer";

// app middleware
import {booksMiddleware} from "./middleware/application/books.middleware";

// core middleware
import {multiMiddleware} from "./middleware/core/multi.middleware";
import {apiMiddleware} from "./middleware/core/api.middleware";
import {notificationMiddleware} from "./middleware/core/notification.middleware";
import {normalizeMiddleware} from "./middleware/core/normalize.middleware";
import {loggerMiddleware} from "./middleware/core/logger.middleware";

// structure the application state
const reducers = combineReducers({
  books: undoable(booksReducer),
  notifications: undoable(notificationsReducer),
  ui: uiReducer
});

// apply meta reducer to the entire state
const rootReducer = stateFreezer(reducers);

// define the order of application middleware
const appMiddleware = [
  booksMiddleware
];

// define the order of core middleware
const coreMiddleware = [
  multiMiddleware,
  apiMiddleware,
  notificationMiddleware,
  normalizeMiddleware,
  loggerMiddleware
];

// compose extra store enhancers
const enhancer = compose(
  applyMiddleware(...appMiddleware, ...coreMiddleware),
  DevTools.instrument()
);

// create and configure the store
export const store = createStore(rootReducer, {}, enhancer);
