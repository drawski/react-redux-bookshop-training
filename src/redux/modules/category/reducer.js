import { FETCH_X_FAILURE, FETCH_X_SUCCESS, FETCH_X_PENDING } from './actionTypes'

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_X_SUCCESS: {
      return action.payload
    }
    default:
      return state
  }
}
