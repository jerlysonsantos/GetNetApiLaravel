import React, { Component } from 'react';

import { Form, Button } from 'react-bootstrap';

class Register extends Component {

  constructor(props) {
    super(props);

    this.stateInital = {
      username: '',
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

    const { username, email, password } = this.state;

    return (
    <Form>
      <h2>Cadastro</h2>
      <Form.Group controlId="registerUsername">
        <Form.Label>Username</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter username"
          name="username"
          value={ username }
          onChange={this.inputListen}
          />
      </Form.Group>

      <Form.Group controlId="registerEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          name="email"
          value={ email }
          onChange={this.inputListen}
          />
      </Form.Group>

      <Form.Group controlId="registerPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          name="password"
          value={ password }
          onChange={this.inputListen}/>
      </Form.Group>
      <Button variant="primary" type="submit">
        Cadastrar
      </Button>
    </Form>
    );
  }
}

export default Register;
