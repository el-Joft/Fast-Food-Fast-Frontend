import axios from 'axios';
import {
  MAKE_AN_ORDER,
  ADD_TO_CART,
  CHANGE_QUANTITY,
  GET_ERRORS,
  CHECKOUT_ORDER,
  EMPTY_CART,
  GET_ORDERS,
  GET_SUCCESS,
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

  return dispatch({
    type: ADD_TO_CART,
    cartArray,
  });
};

export const changeQuantity = (id, quantity) => (dispatch) => {
  return dispatch({
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
  return axios({
    method: 'post',
    url: `${process.env.BASE_URL_PROD}/api/v1/orders`,
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

export const getOrders = (token, id) => (dispatch) => {
  return axios({
    method: 'get',
    url: `${process.env.BASE_URL_PROD}/api/v1/users/${id}/orders`,
    headers: {
      'Content-Type': 'application/json',
      token,
    },
  })
    .then((res) => {
      dispatch({
        type: GET_ORDERS,
        payload: res.data.result,
      });
    })
    .catch(err => dispatch({
      type: GET_ERRORS,
      payload: err.response.data,
    }));
};

export const getAdminOrders = token => (dispatch) => {
  return axios({
    method: 'get',
    url: `${process.env.BASE_URL_PROD}/api/v1/orders`,
    headers: {
      'Content-Type': 'application/json',
      token,
    },
  })
    .then((res) => {
      dispatch({
        type: GET_ORDERS,
        payload: res.data.result,
      });
    })
    .catch(err => dispatch({
      type: GET_ERRORS,
      payload: err.response.data,
    }));
};

export const deleteAnOrder = (id, token) => (dispatch) => {
  return axios({
    method: 'delete',
    url: `${process.env.BASE_URL_PROD}/api/v1/orders/${id}`,
    headers: {
      'Content-Type': 'application/json',
      token,
    },
  })
    .then((res) => {
      dispatch({
        type: GET_SUCCESS,
        payload: res.data,
      });
      window.location.reload();
    })
    .catch(err => dispatch({
      type: GET_ERRORS,
      payload: err.response.data,
    }));
};
