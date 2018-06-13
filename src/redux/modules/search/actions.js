import * as actionTypes from './actionTypes'
import api from '../../../backend/fakeApi'

const searchBooks = (search) => (dispatch) => {
  dispatch({ type: actionTypes.FETCH_X_PENDING })
  return api.searchByAuthorTitle(search)
    .then(books => {
      dispatch({ type: actionTypes.FETCH_X_SUCCESS, payload: books })
    })
    .catch(e => {
      dispatch({ type: actionTypes.FETCH_X_FAILURE, payload: e })
    })
}

export {
  searchBooks
}
