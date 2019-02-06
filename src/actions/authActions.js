import axios from 'axios';
import jwtDecode from 'jwt-decode';
import setAuthToken from '../utils/setAuthToken';

import { GET_ERRORS, SET_CURRENT_USER } from './types';
import { emptyCart } from './orderAction';

// set user
export const setCurrentUser = decoded => ({
  type: SET_CURRENT_USER,
  payload: decoded,
});


// REGISTEER USER
// here we dispatch something to our reducer
export const registerUser = userData => (dispatch) => {
  return axios.post('https://fffastapp.herokuapp.com/api/v1/auth/signup', userData)
    .then((res) => {
      // save token to local storage
      const { token } = res.data;
      // set token to local storage
      // Note: Localstorage store strings
      localStorage.setItem('userToken', token);
      // set it to the auth header
      setAuthToken(token);
      // decode the token
      const decoded = jwtDecode(token);
      // set user
      dispatch(setCurrentUser(decoded));
    })
    .catch(err => dispatch({
      type: GET_ERRORS,
      payload: err.response.data,
    }));
};

export const loginUser = loginDetails => (dispatch) => {
  return axios.post('https://fffastapp.herokuapp.com/api/v1/auth/login', loginDetails)
    .then((res) => {
      // save token to local storage
      const { token } = res.data;
      // set token to local storage
      // Note: Localstorage store strings
      localStorage.setItem('userToken', token);
      // set it to the auth header
      setAuthToken(token);
      // decode the token
      const decoded = jwtDecode(token);
      // set user
      dispatch(setCurrentUser(decoded));
    })
    .catch(err => dispatch({
      type: GET_ERRORS,
      payload: err.response.data,
    }));
};

export const logoutUser = () => (dispatch) => {
  localStorage.removeItem('userToken');
  // remove auth header for future request
  setAuthToken(false);
  // set the current user to an empty object which set isAuthenticated to false
  dispatch(emptyCart(null));
  dispatch(setCurrentUser({}));
  window.location.href = '/login';
};
