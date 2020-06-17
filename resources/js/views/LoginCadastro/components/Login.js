import React, { Component } from 'react';

import { Form, Button } from 'react-bootstrap';

import axios from 'axios';

class Login extends Component {

  constructor(props) {
    super(props);

    this.stateInital = {
      email: '',
      password: '',
    }

    this.state = {
      ...this.stateInital,
      validated: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

  }

  async onSubmit(event) {
    try {
      event.preventDefault();

      const { validated, ...info } = this.state;

      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.stopPropagation();
      }

      this.setState({
        validated: true,
      });

      if (form.checkValidity())
        await axios.post('auth/doLogin', info)
          .then((res) => {
            const { user } = res.data;
            localStorage.setItem('user', JSON.stringify(user));
            window.location.href = '/';
          })
          .catch((error) => {
            const { data } = error.response;
            alert(data);
          });

    } catch(error) {
      console.log(error)
    }
  }

  handleChange(event) {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  }

  render() {

    const { email, password } = this.state;

    return (
      <Form noValidate validated={ this.state.validated } onSubmit={ this.onSubmit } >
        <h2>Login</h2>
        <Form.Group controlId="loginEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            required
            type="email"
            placeholder="Enter email"
            name="email"
            maxLength={ 60 }
            value={ email }
            onChange={ this.handleChange }
            />
          <Form.Control.Feedback type="invalid">
            Campo inválido.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="loginPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            required
            type="password"
            placeholder="Password"
            name="password"
            value={ password }
            onChange={ this.handleChange }
            />
          <Form.Control.Feedback type="invalid">
            Campo inválido.
          </Form.Control.Feedback>
        </Form.Group>
        <Button variant="primary" type="submit">
          Entrar
        </Button>
      </Form>
    );
  }
}

export default Login;
