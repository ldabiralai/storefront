export default function productReducer(state = {loading: true}, action) {
  switch (action.type) {
    case 'SET_PRODUCTS':
      return Object.assign({}, state, {products: action.products, loading: false})
    case 'SET_PRODUCTS_ERROR':
      return Object.assign({}, state, {error: true})
    case 'SET_PRODUCT_DETAILS':
      const {Reviews, Description} = action.details
      const newState = JSON.parse(JSON.stringify(state))
      const product = newState.products.find(product => product.Id === action.details.Id)
      product.Reviews = Reviews
      product.Description = Description
      return newState
    case 'SET_PRODUCT_DETAILS_ERROR':
      return Object.assign({}, state, {error: true})
    default: 
      return state
  }
}
