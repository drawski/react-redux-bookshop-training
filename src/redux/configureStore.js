import { createStore, combineReducers } from 'redux';

const helloWorldReducer = (state, action) => {
  return 'Hello World!'
}

export default () => createStore(
  combineReducers({
    helloWorld: helloWorldReducer
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
