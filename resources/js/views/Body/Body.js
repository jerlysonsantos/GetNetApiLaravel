import React, { Component } from 'react';
import './Body.scss';

import { Jumbotron } from 'react-bootstrap';

function Greeting(props) {
  const isLogged = props.isLoggedIn;
  if (isLogged) {
    return <h1>Logado</h1>;
  } else {
    return <h1>Não Logado</h1>;
  }
}

class Body extends Component {

  constructor(props) {
    super(props);

    this.state = {
      logged: props.isLoggedIn
    };

  }

  render() {

    return (
      <div className="container py-4">
        <h1>
          Main
        </h1>
        <Jumbotron>
          <Greeting isLoggedIn={this.state.logged}/>
        </Jumbotron>
      </div>
    );
  }
}

export default Body;
