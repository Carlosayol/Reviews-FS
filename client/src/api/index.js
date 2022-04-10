import axios from 'axios'

const url = 'http://localhost:3000/influencers'

export const fetchInfluencers = () => axios.get(url)
export const createInfluencer = (influencerData) => axios.post(url, influencerData)
export const updateInfluencer = (id, influencerData) => axios.patch(`${url}/${id}`, influencerData)
export const deleteInfluencer = (id) => axios.delete(`${url}/${id}`)