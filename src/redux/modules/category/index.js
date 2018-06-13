import { FETCH_X_PENDING, FETCH_X_SUCCESS, FETCH_X_FAILURE } from './actionTypes'
import { fetchCategoryBooks } from './actions'
import reducer from './reducer'

export default reducer
export {
  FETCH_X_SUCCESS,
  FETCH_X_PENDING,
  FETCH_X_FAILURE,
  fetchCategoryBooks
}
