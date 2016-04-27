import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import nock from 'nock'
import {expect} from 'chai'
import * as productActions from '../../js/actions/productActions'

const mockStore = configureStore([thunk]);

describe('actions', () => {
  beforeEach(() => nock.cleanAll());
  
  it('fetch and set product', () => {
    const response = [{ "Id": 1 }];
    const expected = [{ type: 'SET_PRODUCTS', products: response }];

    nock('http://localhost:7001').get('/api/products').reply(200, response);
    const store = mockStore({});

    return store.dispatch(productActions.fetchProducts())
      .then(() => {
        expect(store.getActions()).to.deep.equal(expected);
      });
  });

  it('fetch and set product details', () => {
    const response = { "Description": "A classic black cat who may bring luck to those who buy her." };
    const expected = [{ type: 'SET_PRODUCT_DETAILS', details: response }];

    nock('http://localhost:7001').get('/api/products/101').reply(200, response);
    const store = mockStore({});

    return store.dispatch(productActions.fetchProductDetails(101))
      .then(() => {
        expect(store.getActions()).to.deep.equal(expected);
      });
  });



});
