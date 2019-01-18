import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Frame from '../containers/Frame/Frame';
import Homepage from '../components/Pages/Homepage/Homepage';
import SignupPage from '../components/Pages/SignupPage/SignupPage';
import NotFound from '../components/UI/NotFound/NotFound';
import LoginPage from '../components/Pages/LoginPage/LoginPage';
import MenuPage from '../components/Pages/MenuPage/MenuPage';
import CheckoutPage from '../components/Pages/CheckoutPage/CheckoutPage';

class Routes extends Component {
  state = {}

  render() {
    return (
      <div>
        <Frame>
          <Switch>
            <Route exact path='/signup' component={SignupPage} />
            <Route path='/checkout' component={CheckoutPage} />
            <Route path='/menu' component={MenuPage} />
            <Route path='/login' component={LoginPage} />
            <Route exact path='/' component={Homepage} />
            <Route component={NotFound} />
          </Switch>
        </Frame>
      </div>
    );
  }
}

export default Routes;
