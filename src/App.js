import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import jwtDecode from 'jwt-decode';
import store from './store/index';
import Route from './routes/Routes';
import setAuthToken from './utils/setAuthToken';
import { setCurrentUser, logoutUser } from './actions/authActions';
import { emptyCart } from './actions/orderAction';


// check for token
if (localStorage.userToken) {
  // set auth token
  setAuthToken(localStorage.userToken);
  // decode token and get user info and expiration
  const decoded = jwtDecode(localStorage.userToken);
  // set user using the setCurrentUser
  store.dispatch(setCurrentUser(decoded));

  // check the token expiry time
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    store.dispatch(logoutUser());
    store.dispatch(emptyCart(null));
    // clear the token in localstorage
    // redirect to login
    window.location.href = '/login';
  }
}
const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Route />
    </BrowserRouter>
  </Provider>
);

export default App;
