/* eslint-disable no-unused-vars */
import orderReducer from './orderReducer';
import {
  MAKE_AN_ORDER,
  ADD_TO_CART,
  CHANGE_QUANTITY,
  CHECKOUT_ORDER,
  EMPTY_CART,
} from '../actions/types';

const initialState = {
  order: null,
  count: 0,
  cart: null,
};

describe('authenticate reducer', () => {
  it('returns the initial state', () => {
    expect(orderReducer(undefined, {})).toEqual(initialState);
  });

  it('handles request', () => {
    expect(orderReducer(initialState, { type: ADD_TO_CART })).toEqual({
      order: null,
      cart: undefined,
      count: 0,
    });
  });

  it('handles request', () => {
    expect(orderReducer(initialState, { type: CHECKOUT_ORDER })).toEqual({
      cart: undefined,
      count: 0,
      order: null,
    });
  });

  it('handles request', () => {
    expect(orderReducer(initialState, { type: EMPTY_CART })).toEqual({
      cart: null,
      count: 0,
      order: null,
    });
  });

  it('handles request', () => {
    const initialstate = {
      order: null,
      count: 0,
      cart: null,
    };

    const state = orderReducer(initialstate, {
      type: MAKE_AN_ORDER,
      cart: null,
      count: 1,
      order: null,
    });
    expect(state).toEqual({
      cart: null,
      count: 1,
      order: undefined,
    });
  });

  it('handles request', () => {
    const initialstate = {
      order: null,
      count: 0,
      cart: null,
    };

    const state = orderReducer(initialstate, {
      type: MAKE_AN_ORDER,
      cart: null,
      count: 1,
      order: null,
    });
    expect(state).toEqual({
      cart: null,
      count: 1,
      order: undefined,
    });
  });

  it('handles request', () => {
    const initialstate = {
      count: 0,
      order: null,
      cart: [],
    };

    const state = orderReducer(initialstate, {
      type: CHANGE_QUANTITY,
      count: 1,
      order: null,
      cart: [],
    });
    expect(state).toEqual({
      cart: [],
      count: 0,
      order: null,
    });
  });
});
