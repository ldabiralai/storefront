import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router'

import Products from '../components/Products.react'

class App extends React.Component {
  render() {
    if (this.props.error) return <div>Error, please try later</div>;
    if (this.props.loading) return null;

    const {products} = this.props;

    return (
      <main>
        <h1>Storefront</h1>
        <Products list={products} />
      </main>  
    );
  }
}

export default connect(state => state)(App)
