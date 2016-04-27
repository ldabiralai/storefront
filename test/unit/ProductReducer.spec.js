import {expect} from 'chai';
import productReducer from '../../js/reducers/productReducer';

describe('productReducer', () => {

  const products = [{
    "Id": 101,
    "Name": "Black",
    "ImageName": "black.jpg",
    "ImageUrl": "http://frontenddevinterview.azurewebsites.net/Images/black.jpg",
    "PriceDecimal": 100
  }];
  
  it('sets the products correctly', () => {
    const action = {
      type: 'SET_PRODUCTS',
      products 
    } 

    expect(productReducer(undefined, action)).to.deep.equal({products, loading: false})
  });

  it('sets product error correctly', () => {
    const action = {
      type: 'SET_PRODUCTS_ERROR'
    } 

    expect(productReducer(undefined, action)).to.deep.equal({loading: true, error: true})
  });

  it('sets product details correctly', () => {
    const details = {
      "Description": "A classic black cat who may bring luck to those who buy her.",
      "Reviews": [
        {
          "Id": 1001,
          "Rating": 5,
          "Reviewer": "luckyguy",
          "Description": "The best feline purchase I ever made"
        },
        {
          "Id": 1002,
          "Rating": 4,
          "Reviewer": "mostly lucky",
          "Description": "You need to get this cat!"
        }
      ],
      "Id": 101
    };
    const action = {
      type: 'SET_PRODUCT_DETAILS',
      details
    } 

    const result = productReducer({products, loading: false}, action);

    delete details.Id;
    expect(result).to.deep.equal({products: [{...products[0], ...details}], loading: false})
  });

  it('sets product details error correctly', () => {
    const action = {
      type: 'SET_PRODUCT_DETAILS_ERROR'
    };

    expect(productReducer(undefined, action)).to.deep.equal({loading: true, error: true});
  });

  it('returns state if no action type', () => {
    const state = {
      loading: true
    };

    expect(productReducer(undefined, {})).to.deep.equal(state);
  });

});
