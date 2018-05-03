import {SET_LOADER} from "../../actions/ui.actions";

// define the initial state
const initState = {
  loading: false,
};

// define how to create new state (write)
export const uiReducer = (ui =initState, action) => {
  switch (true) {

    case action.type.includes(SET_LOADER):
      return {...ui, loading: action.payload };

    default:
      return ui;
  }
};

// define how to read the state (read)
export const selectLoading = state => state.ui.loading;
