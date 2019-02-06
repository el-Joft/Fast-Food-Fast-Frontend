import errorReducer from './errorReducer';
import { GET_ERRORS } from '../actions/types';

const initialState = {

};

describe('authenticate reducer', () => {
  it('returns the initial state', () => {
    expect(errorReducer(undefined, {})).toEqual(initialState);
  });

  it('handles login request', () => {
    expect(errorReducer(initialState, { type: GET_ERRORS })).toEqual(undefined);
  });
});
