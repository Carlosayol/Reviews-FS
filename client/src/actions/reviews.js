import * as api from '../api'
import { CREATE, DELETE, FETCH_ALL, UPDATE } from '../constants/actionTypes'

export const getReviews = () => async (dispatch) => {
  try {
    const { data } = await api.fetchReviews()
    dispatch({ type: FETCH_ALL, payload: data })
  } catch (err) {
    console.log(err.message)
  }
}

export const createReview = (review) => async (dispatch) => {
  try {
    const { data } = await api.createReview(review)
    dispatch({ type: CREATE, payload: data })
  } catch (err) {
    console.log(err.message)
  }
}

export const updateReview = (id, review) => async (dispatch) => {
  try {
    const { data } = await api.updateReview(id, review)
    dispatch({ type: UPDATE, payload: data })
  } catch (err) {
    console.log(err)
  }
}

export const deleteReview = (id) => async (dispatch) => {
  try {
    await api.deleteReview(id)
    dispatch({ type: DELETE, payload: id })
  } catch (err) {
    console.log(err)
  }
}