import React, { Component } from 'react';

import './Product.scss';

class Product extends Component {

  constructor(props) {
    super(props);

    this.state = props.location.state;

  }

  render() {
    return (
      <div className="container py-4">
        <h1>
          { this.state.name }
        </h1>
        <p>
          { this.state.description }
        </p>
      </div>
    );
  }
}

export default Product;
