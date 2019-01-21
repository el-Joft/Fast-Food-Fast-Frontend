import { combineReducers } from 'redux';
import authReducer from './authReducer';
import errorReducer from './errorReducer';
import menuReducer from './menuReducer';
import orderReducer from './orderReducer';
import getOrdersReducer from './getOrdersReducer';

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  menu: menuReducer,
  order: orderReducer,
  orders: getOrdersReducer,
});
