import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import { getAllMenus } from './getMenusAction';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore({});

describe('Get Menu', () => {
  beforeEach(() => moxios.install());
  afterEach(() => moxios.uninstall());

  it('test menu actions succesfully', (done) => {
    moxios.stubRequest('http://fffastapp.herokuapp.com/api/v1/menus', {
      status: 200,
    });
    const expectedResult = [
      { payload: [{}], type: 'GET_ALL_MENUS' },
    ];
    store.dispatch(getAllMenus())
      .then(() => {
        expect(store.getActions()).toEqual(expectedResult);
      });
    done();
  });

  // it('test menu actions succesfully', (done) => {
    
  //   const expectedResult = [
  //     { type: 'LOADING' },
  //   ];
  //   store.dispatch(setMe())
  //     .then(() => {
  //       expect(store.getActions()).toEqual(expectedResult);
  //     });
  //   done();
  // });
});
