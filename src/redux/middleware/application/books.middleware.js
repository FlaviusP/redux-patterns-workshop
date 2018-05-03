import {FETCH_BOOKS, setBooks} from "../../actions/books.actions";
import {API_ERROR, API_SUCCESS, apiRequest} from "../../actions/api.actions";
import {setLoader} from "../../actions/ui.actions";
import {API} from '../../constants';
import {setNotification} from "../../actions/notification.actions";
import {BOOKS} from '../../constants/entities';

export const booksMiddleware = ({dispatch}) => (next) => (action) => {
  next(action);

  switch (action.type) {

    case FETCH_BOOKS:
      next([
        apiRequest(null, 'GET', API.BOOKS, BOOKS),
        setLoader(true, BOOKS)
      ]);
      break;

    case `${BOOKS} ${API_SUCCESS}`:
      next([
        setBooks(action.payload.data.items, 'id'),
        setLoader(false, BOOKS)
      ]);
      break;

    case `${BOOKS} ${API_ERROR}`:
      next([
        setNotification(action.payload, BOOKS),
        setLoader(false, BOOKS)
      ]);
      break;
  }
};
