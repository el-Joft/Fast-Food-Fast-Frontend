import { MAKE_AN_ORDER, ADD_TO_CART } from './types';

const cartArray = [];
const addCart = payload => (dispatch) => {
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


export default addCart;
