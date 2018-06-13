import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import featuredBooksReducer from './modules/featured'
import categoryBooksReducer from './modules/category'
import searchReducer from './modules/search'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default () => createStore(
  combineReducers({
    featuredBooks: featuredBooksReducer,
    categoryBooks: categoryBooksReducer,
    books: searchReducer
  }),
  composeEnhancers(
    applyMiddleware(
      thunk
    )
  )
)
