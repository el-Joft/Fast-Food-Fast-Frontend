import { GET_SUCCESS } from '../actions/types';
import successReducer from './successReducer';


const initialState = {
};

describe('authenticate reducer', () => {
  it('returns the initial state', () => {
    expect(successReducer(undefined, {})).toEqual(initialState);
  });

  it('handles request', () => {
    expect(successReducer(initialState, { type: GET_SUCCESS })).toEqual();
  });
});
