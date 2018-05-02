import {API_REQUEST} from "../../actions/api.actions";
import {apiError, apiSuccess} from "../../actions/api.actions";

export const apiMiddleware = ({ dispatch }) => (next) => (action) => {
  next(action);

  if(action.type.includes(API_REQUEST)) {
    const { url, method, entity } = action.meta ;
    debugger;
    fetch(url, { method })
      .then( response => response.json())
      .then( data => dispatch(apiSuccess(data, entity)))
      .catch( error => dispatch(apiError(error, entity)))
  }
};

