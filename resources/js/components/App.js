import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './Header';

import Body from './Body/Body';
import Store from './Store/Store';
import Product from './Product/Product';
import LoginCadastro from './LoginCadastro/LoginCadastro';

class App extends Component {

  constructor(props) {
    super(props);
    const user = localStorage.getItem('user')

    this.state = {
      logged: false,
      user
    }

    if (user) this.setState({ logged: true });

  }

  render () {


    return (
      <BrowserRouter>
        <div>
          <Header isLoggedIn={this.state.logged} user={this.state.user} />
        </div>
        <Switch>
          <Route exact path="/" component={ Body } isLoggedIn={this.state.logged} />
          <Route exact path="/store" component={ Store } />
          <Route exact path="/product" component={ Product } />
          <Route exact path="/login" component={ LoginCadastro } />
        </Switch>
      </BrowserRouter>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))

