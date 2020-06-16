import React, { Component, lazy, Suspense } from 'react';
import './Store.scss';

const StoreList = lazy(() => import('./components/StoreList.js'));

class Store extends Component {

  constructor(props){
    super(props);
    this.state = {
      infos: {
        currency: 'BRL',
        amount: 50,
      },
      items: [
        {
          name: 'Item 1',
          description: 'Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI',
        },
        {
          name: 'Item 2',
          description: 'Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI',
        },
        {
          name: 'Item 3',
          description: 'Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI',
        },
        {
          name: 'Item 4',
          description: 'Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI',
        },
        {
          name: 'Item 5',
          description: 'Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI',
        }],
    }
  }
  render() {

    return (
      <div className="container py-4">
        <h1>
          Store
        </h1>
        <div className="grid-container">
          <Suspense fallback={<div>Loading...</div>}>
            {
              this.state.items.map((item, index) => {
                return <StoreList key={index} item={ item } />
              })
            }
          </Suspense>
        </div>
      </div>
    );
  }
}

export default Store;
