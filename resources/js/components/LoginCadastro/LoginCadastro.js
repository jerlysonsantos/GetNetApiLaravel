import React, { Component } from 'react';

import { Row, Col } from 'react-bootstrap';

import Register from './components/Register.js';
import Login from './components/Login.js';

class LoginCadastro extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div className="container py-4">
        <Row>
          <Col>
            <Login />
          </Col>
          <Col>
            <Register />
          </Col>
        </Row>
      </div>
    );
  }
}

export default LoginCadastro;
