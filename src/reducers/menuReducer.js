import { GET_ALL_MENUS, LOADING } from '../actions/types';

const initialState = {
  menu: null,
  loading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        loading: true,
      };
    case GET_ALL_MENUS:
      return {
        ...state,
        menu: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
