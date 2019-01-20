import axios from 'axios';
import {
  MAKE_AN_ORDER,
  ADD_TO_CART,
  CHANGE_QUANTITY,
  GET_ERRORS,
  CHECKOUT_ORDER,
  EMPTY_CART,
} from './types';

const cartArray = [];
export const addCart = payload => (dispatch) => {
  dispatch({
    type: MAKE_AN_ORDER,
    payload,
  });

  cartArray.push(payload);
  const cartItems = JSON.stringify(cartArray);
  localStorage.setItem('cart', cartItems);

  dispatch({
    type: ADD_TO_CART,
    cartArray,
  });
};

export const changeQuantity = (id, quantity) => (dispatch) => {
  dispatch({
    type: CHANGE_QUANTITY,
    payload: { id, quantity },
  });
};

export const emptyCart = (payload) => {
  localStorage.removeItem('cart');
  return {
    type: EMPTY_CART,
    payload,
  };
};

export const checkoutOrder = (value, token, history) => (dispatch) => {
  axios({
    method: 'post',
    url: 'https://fffastapp.herokuapp.com/api/v1/orders',
    data: value,
    headers: {
      'Content-Type': 'application/json',
      token,
    },
  })
    .then((res) => {
      dispatch({
        type: CHECKOUT_ORDER,
        payload: res.data.result,
      });
      dispatch(emptyCart(null));
      history.push('/success');
    })
    .catch(err => dispatch({
      type: GET_ERRORS,
      payload: err.response.data,
    }));
};