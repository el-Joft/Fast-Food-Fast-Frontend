import axios from 'axios';


import { GET_ERRORS, GET_ALL_MENUS, MENU_LOADING } from './types';


export const setMenuLoading = () => ({
  type: MENU_LOADING,
});

export const getAllMenus = () => (dispatch) => {
  dispatch(setMenuLoading());
  axios.get('http://fffastapp.herokuapp.com/api/v1/menus')
    .then(res => dispatch({
      type: GET_ALL_MENUS,
      payload: res.data.result,
    }))
    .catch(err => dispatch({
      type: GET_ERRORS,
      payload: err.response.data,
    }));
};
