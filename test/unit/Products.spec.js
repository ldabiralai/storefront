import React from 'react'
import {shallow} from 'enzyme'
import {expect} from 'chai'

import Products from '../../js/components/Products.react'
import Product from '../../js/components/Product.react'
import mocks from '../mocks.json'

describe('Products', () => {

  it('should render a list of products', () => {
    const component = shallow(<Products list={mocks[0].response}/>);
    expect(component.find(Product)).to.be.length(10);
  });

  it('should pass correct props into product', () => {
    const component = shallow(<Products list={mocks[0].response}/>);

    const firstProduct = component.find(Product).nodes[0];
    const firstProps = mocks[0].response[0];
    expect(firstProduct.props).to.deep.equal(firstProps);
  });

});
