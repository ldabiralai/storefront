import * as api from '../api'
import config from '../config.js'

function setProducts(products) {
  return {
    type: 'SET_PRODUCTS',
    products 
  }
}

function setProductsError() {
  return {
    type: 'SET_PRODUCTS_ERROR'
  }
}

function setProductDetails(details) {
  return {
    type: 'SET_PRODUCT_DETAILS',
    details 
  }
}

function setProductDetailsError() {
  return {
    type: 'SET_PRODUCT_DETAILS_ERROR'
  }
}

export function fetchProducts() {
  return (dispatch) => {
    api.get(config.endpoint)
     .then((res) => dispatch(setProducts(res.data))) 
     .catch((res) => dispatch(setProductsError()))
  }
}

export function fetchProductDetails(id) {
  return (dispatch) => {
    api.get(`${config.endpoint}/${id}`)
     .then((res) => dispatch(setProductDetails(res.data))) 
     .catch((res) => dispatch(setProductDetailsError()))
  }
}
