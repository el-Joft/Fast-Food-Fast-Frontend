import getOrdersReducer from './getOrdersReducer';
import { GET_ORDERS, DELETE_ORDER, LOADING } from '../actions/types';

const initialState = {
  orders: null,
  loading: false,
};

describe('authenticate reducer', () => {
  it('returns the initial state', () => {
    expect(getOrdersReducer(undefined, {})).toEqual(initialState);
  });

  it('handles request', () => {
    expect(getOrdersReducer(initialState, { type: GET_ORDERS })).toEqual({
      orders: undefined,
      loading: false,
    });
  });

  it('handles request', () => {
    expect(getOrdersReducer(initialState, { type: DELETE_ORDER })).toEqual({
      orders: undefined,
      loading: false,
    });
  });

  it('handles request', () => {
    expect(getOrdersReducer(initialState, { type: LOADING })).toEqual({
      orders: null,
      loading: true,
    });
  });
});
