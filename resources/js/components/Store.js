import React, { Component } from 'react';
import { Card, Table } from 'react-bootstrap';
import axios from 'axios';


class Store extends Component {

  constructor(props){
    super(props);
    this.state = {
      infos: {
        currency: 'BRL',
        amount: 50,
      },
      items: ['a', 'b', 'c', 'd', 'e', 'f'],
    }
  }
  async buyProduct() {
    await axios.post('getnetapi/transaction', this.state.infos)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  renderLine({ name }) {
    return (
      <td>{name}</td>
    )
  };

  render() {
    const test = ['a', 'b', 'c', 'd', 'e', 'f'];

    return (
      <div className="container py-4">
        <h1>
          Store
        </h1>
        <Table>
          <tbody>
            <tr>
            {
              this.state.items.map((item, index) => {
                return this.renderLine({ name: item });
              })
            }
            </tr>
          </tbody>
        </Table>
      </div>
    );
  }
}

export default Store;
