/* eslint-disable no-return-assign */
import { MAKE_AN_ORDER, ADD_TO_CART } from '../actions/types';

const initialState = {
  order: null,
  count: 0,
  cart: null,
};
export default (state = initialState, action) => {
  switch (action.type) {
    case MAKE_AN_ORDER:
      return {
        ...state,
        order: action.payload,
        count: state.count += 1,
      };
    case ADD_TO_CART:
      return {
        ...state,
        cart: action.cartArray,
      };
    default:
      return state;
  }
};
