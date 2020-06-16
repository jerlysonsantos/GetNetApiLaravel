import React, { Component } from 'react';

import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class StoreList extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Card className="cards">
        <Link to={{ pathname: '/product', state: this.props.item }} style={{ textDecoration: 'none', color: '#000' }}>
          <Card.Body>
              <Card.Title>{ this.props.item.name }</Card.Title>
              <Card.Text style={{ overflow: 'hidden', textOverflow: 'ellipsis', height: '140px'}}>
                { this.props.item.description }
              </Card.Text>
          </Card.Body>
        </Link>
      </Card>
    );
  }
}

export default StoreList;
