import {BOOKS, FETCH_BOOKS, setBooks} from "../../actions/books.actions";
import {API_ERROR, API_SUCCESS, apiRequest} from "../../actions/api.actions";
import {setLoader} from "../../actions/ui.actions";
import {API} from '../../constants/urls';
import {setNotification} from "../../actions/notification.actions";

export const booksMiddleware = () => (next) => (action) => {
  next(action);

  switch (action.type) {

    case FETCH_BOOKS:
      next(setLoader(true, BOOKS));
      next(apiRequest(null, 'GET', API.BOOKS, BOOKS));
      break;

    case `${BOOKS} ${API_SUCCESS}`:
      next([
        setBooks(action.payload.data),
        setLoader(false, BOOKS)
      ]);
      break;

    case `${BOOKS} ${API_ERROR}`:
      next([
        setNotification(action.payload.data, BOOKS),
        setLoader(false, BOOKS)
      ]);
      break;
  }
};
