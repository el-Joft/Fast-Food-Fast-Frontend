import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Route from './routes/Routes';
// import Users from './containers/Users';
// import asyncComponent from './hoc/asyncComponent';

// const AsyncPizza = asyncComponent(() => {
//     return import('./containers/Pizza.js');
// });

class App extends Component {
  state = {}

  render() {
    return (
      <BrowserRouter>
        <Route />
      </BrowserRouter>
    );
  }
}

export default App;
