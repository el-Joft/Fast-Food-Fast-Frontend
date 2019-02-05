/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
import {
  MAKE_AN_ORDER, ADD_TO_CART,
  CHANGE_QUANTITY,
  CHECKOUT_ORDER,
  EMPTY_CART,
} from '../actions/types';

const cart = JSON.parse(localStorage.getItem('cart'));

const initialState = {
  order: null,
  count: 0,
  cart,
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
    case CHANGE_QUANTITY:
      return {
        ...state,
        cart: state.cart.map(item => (item.id !== action.payload.id ? item
          : Object.assign({}, item, action.payload))),
      };
    case CHECKOUT_ORDER:
      return {
        ...state,
        cart: action.payload,
      };
    case EMPTY_CART:
      return {
        ...state,
        cart: null,
        count: 0,
        order: null,
      };
    default:
      return state;
  }
};
