import React, { Component } from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';

import { BrowserRouter } from 'react-router-dom';

function Logged(props) {
  const { isLoggedIn } = props;
  const user = JSON.parse(props.user);

  if (isLoggedIn) {
    return (
      <div>
        <h1>{ user.name } <Button variant="danger" onClick={ () => {
          localStorage.removeItem('user');
          window.location.reload(false);
         } }>Log out</Button></h1>
      </div>
    );
  } else {
    return <Button variant="primary" href="/login">Login / Cadastro</Button>;
  }
}
class Header extends Component {

  constructor(props) {
    super(props);

    this.state = {
      date: new Date(),
      logged: props.isLoggedIn,
      user: props.user,
    };

  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({ date: new Date() });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render(){
    return (
      <div className="container">
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="/">
            Store
          </Navbar.Brand>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/">Main</Nav.Link>
              <Nav.Link href="/store">Store</Nav.Link>
            </Nav>
            <Logged isLoggedIn={ this.state.logged } user={ this.state.user }/>
            <div style={{ marginLeft: '20px' }}>
              <h3>
                { this.state.date.toLocaleTimeString() }
              </h3>
            </div>
          </Navbar.Collapse>
        </Navbar>
      </div>
    )
  }
}

export default Header
