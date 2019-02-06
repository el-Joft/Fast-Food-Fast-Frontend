import authReducer from './authReducer';
import { SET_CURRENT_USER } from '../actions/types';

const initialState = {
  user: {},
  isAuthenticated: false,
};

describe('authenticate reducer', () => {
  it('returns the initial state', () => {
    expect(authReducer(undefined, {})).toEqual(initialState);
  });

  it('handles login request', () => {
    expect(authReducer(initialState, { type: SET_CURRENT_USER })).toEqual({
      user: undefined,
      isAuthenticated: false,
    });
  });
});
