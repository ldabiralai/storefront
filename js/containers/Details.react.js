import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {Link} from 'react-router'

import * as productActions from '../actions/productActions'
import Money from '../components/Money.react'

class Details extends React.Component {
  componentWillMount() {
    this.props.actions.fetchProductDetails(this.props.params.id);
  }

  render() {
    if (this.props.error) return <div>Error, please try later</div>;
    if (this.props.loading) return null;

    const {Name, ImageUrl, Description, PriceDecimal, Reviews} = this.props.product;

    return (
      <main className='details'>
        <h1>{Name}<Money price={PriceDecimal} className='price'/></h1>
        <div>
          <img src={ImageUrl} alt={Name}/>
          {Description}
        </div>
        <h2>Reviews - {this._averageRating(Reviews)} out of 5</h2>
        {this._renderReviews(Reviews)}
      </main>  
    );
  }

  _renderReviews(Reviews) {
    if (!Reviews) return null;

    return Reviews.map((review, index) => {
      return (
        <div key={index} className='review'>
          "{review.Description}" - {review.Reviewer}
        </div>
      );
    });
  }

  _averageRating(Reviews) {
    if (!Reviews) return null;

    const totalRating = Reviews.reduce((prev, curr) => prev.Rating + curr.Rating);
    return totalRating / Reviews.length
  }
}

function mapStateToProps(state, props) {
  if (state.loading || state.error) return state

  return { product: state.products.find(product => product.Id == props.params.id) }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(productActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Details)
