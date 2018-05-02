import {SET_BOOKS} from "../actions/books.actions";

export const booksReducer = (books = [], action) => {  
  switch (action.type) {

    case SET_BOOKS:
      return action.payload;

    default:
      return books;
  }
};
