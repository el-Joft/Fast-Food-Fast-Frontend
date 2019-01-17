import { GET_ALL_MENUS, MENU_LOADING } from '../actions/types';

const initialState = {
  menu: null,
  loading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case MENU_LOADING:
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
