import {FETCH_BOOKS, setBooks} from "../../actions/books.actions";
import {API_ERROR, API_SUCCESS, apiRequest} from "../../actions/api.actions";
import {setLoader} from "../../actions/ui.actions";
import {BOOKS} from '../../actions/books.actions';
import {setNotification} from "../../actions/notification.actions";
import {API} from "../../constants/constants";

export const booksMiddleware = () => (next) => (action) => {
  next(action);

  switch (action.type) {

    case FETCH_BOOKS:
      next(apiRequest(null, 'GET', API.BOOKS, BOOKS));
      next(setLoader(true, BOOKS));
      break;

    case `${BOOKS} ${API_SUCCESS}`:
      next(setBooks(action.payload));
      next(setLoader(false, BOOKS));
      break;

    case `${BOOKS} ${API_ERROR}`:
      next(setNotification(action.payload, BOOKS));
      next(setLoader(false, BOOKS));
      break;
  }
};
