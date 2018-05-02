import * as R from 'ramda';
import {SET_LOADER} from "../actions/ui.actions";

const initState = {
  loading: false
};

export const uiReducer = (ui =initState, action) => {
  switch (action.type) {

    case SET_LOADER:
      return {...ui, loading: action.payload };

    default:
      return ui;
  }
};
