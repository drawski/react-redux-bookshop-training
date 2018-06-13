import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import featuredBooksReducer from './modules/featured'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default () => createStore(
  combineReducers({
    featuredBooks: featuredBooksReducer
  }),
  composeEnhancers(
    applyMiddleware(
      thunk
    )
  )
)
