import React, { Component } from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

class Header extends Component {
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
          </Navbar.Collapse>
        </Navbar>
      </div>
    )
  }
}

export default Header
