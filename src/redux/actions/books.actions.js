import {BOOKS} from '../constants/entities';

export const FETCH_BOOKS = `${BOOKS} Fetch`;
export const SET_BOOKS   = `${BOOKS} Set`;

export const fetchBooks = (query) => ({
    type: FETCH_BOOKS,
    payload: query,
});

export const setBooks = (books, normalizeKey) => ({
  type: SET_BOOKS,
  payload: books,
  meta: { normalizeKey, entity: BOOKS }
});
