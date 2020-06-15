import React, { Component } from 'react';
import axios from 'axios';

class Body extends Component {

  async componentDidMount() {
    await axios.get('getnetapi/index')
      .then(res => {
        console.log(res);
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="container py-4">
        <h1>
          Main
        </h1>
      </div>
    );
  }
}

export default Body;
