import {FETCH_BOOKS} from "../../actions/books.actions";
import {apiRequest} from "../../actions/api.actions";
import {setLoader} from "../../actions/ui.actions";
import {BOOKS} from '../../actions/books.actions';

export const booksMiddleware = () => (next) => (action) => {
  next(action);

  switch (action.type) {

    case FETCH_BOOKS:
      next(apiRequest(null, 'GET', '/books', BOOKS));
      next(setLoader(true, BOOKS));
      break;
  }
};
