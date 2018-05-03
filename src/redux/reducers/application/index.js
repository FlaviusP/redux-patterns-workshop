import {combineReducers} from 'redux';
import {booksReducer} from "./books.reducer";
import {uiReducer} from "./ui.reducer";
import {notificationsReducer} from "./notifications.reducer";
import {stateFreezer} from '../meta/stateFreezer.reducer';
import {undoable} from '../meta/undoable.reducer';

const reducers = combineReducers({
  books: undoable(booksReducer),
  notifications: undoable(notificationsReducer),
  ui: uiReducer
});

export const rootReducer = stateFreezer(reducers);
