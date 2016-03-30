import { createStore, applyMiddleware } from 'redux'
import productReducer from '../reducers/productReducer'
import thunkMiddleware from 'redux-thunk'

export default function configureStore() {
  return applyMiddleware(thunkMiddleware)(createStore)(productReducer);
}
