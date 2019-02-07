import axios from 'axios';


import { GET_ERRORS, GET_ALL_MENUS, LOADING } from './types';


export const setMenuLoading = () => ({
  type: LOADING,
});

export const getAllMenus = () => (dispatch) => {
  dispatch(setMenuLoading());
  return axios.get('https://fffastapp.herokuapp.com/api/v1/menus')
    .then(res => dispatch({
      type: GET_ALL_MENUS,
      payload: res.data.result,
    }))
    .catch(err => dispatch({
      type: GET_ERRORS,
      payload: err.response.data,
    }));
};
