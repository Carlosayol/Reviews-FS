import * as api from '../api'

export const getInfluencers = () => async (dispatch) => {
  try {
    const { data } = await api.fetchInfluencers()
    dispatch({ type: 'FETCH_ALL', payload: data })
  } catch (err) {
    console.log(err.message)
  }
}

export const createInfluencer = (influencer) => async (dispatch) => {
  try {
    const { data } = await api.createInfluencer(influencer)
    dispatch({ type: 'CREATE', payload: data })
  } catch (err) {
    console.log(err.message)
  }
}

export const updateInfluencer = (id, influencer) => async (dispatch) => {
  try {
    const { data } = await api.updateInfluencer(id, influencer)
    dispatch({ type: 'UPDATE', payload: data })
  } catch (err) {
    console.log(err)
  }
}