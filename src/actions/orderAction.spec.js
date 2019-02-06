import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import {
  addCart, checkoutOrder, getOrders, getAdminOrders,
} from './orderAction';
import mockData from '../__mocks__/menusMock';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore({});

describe('Get Menu', () => {
  beforeEach(() => moxios.install());
  afterEach(() => moxios.uninstall());

  it('test orders actions succesfully', (done) => {
    const expectedResult = [{ payload: undefined, type: 'MAKE_AN_ORDER' }, { cartArray: [undefined], type: 'ADD_TO_CART' }];
    store.dispatch(addCart());
    expect(store.getActions()).toEqual(expectedResult);
    done();
  });

  it('should post an order', () => {
    const expectedResult = [
      {
        payload: mockData.orders,
        type: 'CHECKOUT_ORDER',
      },
    ];

    const value = {
      menuId: 1,
      orderedBy: 1,
      quantity: 2,
    };

    const token = 'teferffaadsf909099099';
    const { orderedBy, menuId, quantity } = value;
    moxios.stubRequest('https://fffastapp.herokuapp.com/api/v1/orders', { quantity, orderedBy, menuId });

    store.dispatch(checkoutOrder(value, token)).then(() => {
      expect(store.getActions()).toEqual(expectedResult);
    });
  });

  it('should get an order', () => {
    const expectedResult = [
      {
        payload: mockData.orders,
        type: 'GET_ORDERS',
      },
    ];

    const token = 'teferffaadsf909099099';
    const id = 1;
    moxios.stubRequest(`http://fffastapp.herokuapp.com/api/v1/users/${id}/orders`);

    store.dispatch(getOrders(id, token)).then(() => {
      expect(store.getActions()).toEqual(expectedResult);
    });
  });

  it('should get admin order', () => {
    const expectedResult = [
      {
        payload: mockData.orders,
        type: 'GET_ORDERS',
      },
    ];

    const token = 'teferffaadsf909099099';
    moxios.stubRequest('http://fffastapp.herokuapp.com/api/v1/orders');

    store.dispatch(getAdminOrders(token)).then(() => {
      expect(store.getActions()).toEqual(expectedResult);
    });
  });

  it('should delete an order', () => {
    const expectedResult = [
      {
        payload: mockData.orders,
        type: 'GET_SUCCESS',
      },
    ];
    const id = 1;
    const token = 'teferffaadsf909099099';
    moxios.stubRequest(`http://fffastapp.herokuapp.com/api/v1/orders/${id}`);

    store.dispatch(getAdminOrders(token)).then(() => {
      expect(store.getActions()).toEqual(expectedResult);
    });
  });
});
