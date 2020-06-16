import React, { Component } from 'react';

import { Form, Button } from 'react-bootstrap';


class Login extends Component {

  constructor(props) {
    super(props);

    this.stateInital = {
      email: '',
      password: '',
    }

    this.state = this.stateInital;

    this.inputListen = this.inputListen.bind(this);

  }

  inputListen(event) {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  }

  render() {

    const { email, password } = this.state;

    return (
      <Form>
        <h2>Login</h2>
        <Form.Group controlId="loginEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            value={ email }
            onChange={this.inputListen}
            />
          <Form.Control.Feedback type="invalid">
            Campo Vazio.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="loginPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            value={ password }
            onChange={this.inputListen}
            />
        </Form.Group>
        <Form.Group controlId="loginCheckbox">
          <Form.Check
          type="checkbox"
          label="Check me out"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Entrar
        </Button>
      </Form>
    );
  }
}

export default Login;
