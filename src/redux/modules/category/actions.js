import * as actionTypes from './actionTypes'
import api from '../../../backend/fakeApi'
import { cat } from '../../../backend/data'

const fetchCategoryBooks = (category = cat.sf) => (dispatch) => {
  dispatch({ type: actionTypes.FETCH_X_PENDING })
  return api.getBooksByCategory(category)
    .then(books => {
      dispatch({ type: actionTypes.FETCH_X_SUCCESS, payload: books })
    })
    .catch(e => {
      dispatch({ type: actionTypes.FETCH_X_FAILURE, payload: e })
    })
}

export {
  fetchCategoryBooks
}
