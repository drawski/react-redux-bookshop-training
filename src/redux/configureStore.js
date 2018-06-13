import { createStore, combineReducers } from 'redux';
import featuredBooksReducer from './modules/featured'

export default () => createStore(
  combineReducers({
    featuredBooks: featuredBooksReducer
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
