import React from 'react'

import Product from './Product.react'

class Products extends React.Component {
  render() {
    const {list} = this.props;

    return (
      <ul>
        {this._renderProducts(list)}
      </ul>
    );
  }

  _renderProducts(list) {
    return list.map((product, index) => <Product key={index} {...product}/>)
  }
}

export default Products;
