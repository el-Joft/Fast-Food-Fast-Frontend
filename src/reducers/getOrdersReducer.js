import { LOADING, GET_ORDERS } from '../actions/types';

const initialState = {
  orders: null,
  loading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        loading: true,
      };
    case GET_ORDERS:
      return {
        ...state,
        orders: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
