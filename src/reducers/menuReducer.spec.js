import { GET_ALL_MENUS, LOADING } from '../actions/types';
import menuReducer from './menuReducer';

const initialState = {
  menu: null,
  loading: false,
};

describe('authenticate reducer', () => {
  it('returns the initial state', () => {
    expect(menuReducer(undefined, {})).toEqual(initialState);
  });

  it('handles request', () => {
    expect(menuReducer(initialState, { type: GET_ALL_MENUS })).toEqual({
      menu: undefined,
      loading: false,
    });
  });

  it('handles request', () => {
    expect(menuReducer(initialState, { type: LOADING })).toEqual({
      menu: null,
      loading: true,
    });
  });
});
