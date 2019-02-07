import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
// import jwtDecode from 'jwt-decode';
import mockData from '../__mocks__/userMock';
import {
  loginUser, setCurrentUser, registerUser, logoutUser,
} from './authActions';
import { SET_CURRENT_USER } from './types';


const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore({});

describe('Auth Action', () => {
  beforeEach(() => moxios.install());
  afterEach(() => moxios.uninstall());
  const loginData = {
    email: 'ottimothy@gmail.com',
    password: '123456',
  };
  it('creates SET_CURRENT_USER when login action is succesful', (done) => {
    moxios.stubRequest('https://fffastapp.herokuapp.com/api/v1/auth/login', {
      status: 200,
      response: {
        data: mockData.users,
      },
    });
    const expectedResult = [
      {
        payload: mockData.users,
        type: SET_CURRENT_USER,
      },
    ];
    store.dispatch(loginUser(loginData))
      .then(() => {
        expect(store.getActions()).toEqual(expectedResult);
      });
    done();
  });

  it('creates SET_CURRENT_USER when registers action is succesful', (done) => {
    moxios.stubRequest('https://fffastapp.herokuapp.com/api/v1/auth/signup', {
      status: 200,
      response: {
        data: mockData.users,
      },
    });
    const expectedResult = [
      { payload: null, type: 'EMPTY_CART' },
      { payload: {}, type: 'SET_CURRENT_USER' },
      { payload: 'decoded', type: 'SET_CURRENT_USER' }];
    store.dispatch(registerUser(loginData))
      .then(() => {
        expect(store.getActions()).toEqual(expectedResult);
      });
    done();
  });

  it('creates log the user out succesfully', (done) => {
    const expectedResult = [
      {
        type: 'EMPTY_CART',
        payload: null,
      },
      {
        payload: {},
        type: SET_CURRENT_USER,
      },
    ];
    store.dispatch(logoutUser());
    expect(store.getActions()).toEqual(expectedResult);
    done();
  });

  it('test set user out', (done) => {
    const expectedResult = [
      {
        type: 'EMPTY_CART',
        payload: null,
      },
      {
        payload: {},
        type: SET_CURRENT_USER,
      },
      {
        payload: 'decoded',
        type: 'SET_CURRENT_USER',
      },
    ];
    store.dispatch(setCurrentUser('decoded'));
    expect(store.getActions()).toEqual(expectedResult);
    done();
  });
});
