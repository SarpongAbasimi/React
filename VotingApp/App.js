import React, { Component } from 'react';
import Product from './components/product'

const products = [
  {
  id: 1,
  title: 'watch',
  description: 'On-demand sand castle construction expertise.',
  url: '#',
  //votes: generateVoteCount(),
  submitterAvatarUrl: 'https://media.giphy.com/media/3o751YuQ6qZBDZmnDO/giphy.gif',
  productImageUrl: 'https://media.giphy.com/media/3o751YuQ6qZBDZmnDO/giphy.gif',
},    {
  id: 2,
  title: 'Yell Pail',
  description: 'sand castle construction expertise.',
  url: '#',
  //votes: generateVoteCount(),
  submitterAvatarUrl: 'https://media.giphy.com/media/3o751YuQ6qZBDZmnDO/giphy.gif',
  productImageUrl: 'https://media.giphy.com/media/3o751YuQ6qZBDZmnDO/giphy.gif',
},    {
  id: 3,
  title: 'Pail',
  description: 'construction expertise.',
  url: '#',
  //votes: generateVoteCount(),
  submitterAvatarUrl: 'https://media.giphy.com/media/3o751YuQ6qZBDZmnDO/giphy.gif',
  productImageUrl: 'https://media.giphy.com/media/3o751YuQ6qZBDZmnDO/giphy.gif',
},
]


class App extends Component {
  render() {
    const productComponet = products.map(element=>
      <Product
        key={element.id}
        title={element.title}
        submitterAvatarUrl={element.submitterAvatarUrl}
        productImageUrl={element.productImageUrl}
      />);
    return (
      <div className="App">
      {productComponet}
      </div>
    );
  }
}

export default App;
