/* eslint-disable import/no-anonymous-default-export */
import { CREATE, DELETE, FETCH_ALL, UPDATE } from "../constants/actionTypes"

export default (reviews = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload
    case CREATE:
      return [...reviews, action.payload]
    case UPDATE:
      return reviews.map((review) =>
        review._id === action.payload._id ? action.payload : review
      )
    case DELETE:
      return reviews.filter((review) => review._id !== action.payload)
    default:
      return reviews
  }
}
