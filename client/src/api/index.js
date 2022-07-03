import axios from 'axios'

const url = 'http://localhost:3000/reviews'

export const fetchReviews = () => axios.get(url)
export const createReview = (reviewData) => axios.post(url, reviewData)
export const updateReview = (id, reviewData) => axios.patch(`${url}/${id}`, reviewData)
export const deleteReview = (id) => axios.delete(`${url}/${id}`)