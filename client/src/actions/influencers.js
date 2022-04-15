import * as api from '../api'
import { CREATE, DELETE, FETCH_ALL, UPDATE } from '../constants/actionTypes'

export const getInfluencers = () => async (dispatch) => {
  try {
    const { data } = await api.fetchInfluencers()
    dispatch({ type: FETCH_ALL, payload: data })
  } catch (err) {
    console.log(err.message)
  }
}

export const createInfluencer = (influencer) => async (dispatch) => {
  try {
    const { data } = await api.createInfluencer(influencer)
    dispatch({ type: CREATE, payload: data })
  } catch (err) {
    console.log(err.message)
  }
}

export const updateInfluencer = (id, influencer) => async (dispatch) => {
  try {
    const { data } = await api.updateInfluencer(id, influencer)
    dispatch({ type: UPDATE, payload: data })
  } catch (err) {
    console.log(err)
  }
}

export const deleteInfluencer = (id) => async (dispatch) => {
  try {
    await api.deleteInfluencer(id)
    dispatch({ type: DELETE, payload: id })
  } catch (err) {
    console.log(err)
  }
}