import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from './Header'
import Body from './Body'
import Store from './Store'

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <div>
          <Header />
        </div>
        <Switch>
          <Route exact path="/" component={Body} />
          <Route exact path="/store" component={Store} />
        </Switch>
      </BrowserRouter>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))

