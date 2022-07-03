import mongoose from "mongoose"
import Review from "../models/reviews.js"

export const getReviews = async (request, response) => {
  try {
    const reviews = await Review.find()
    response.status(200).json(reviews)
  } catch (err) {
    response.status(404).json({ message: err.message})
  }
}

export const createReview = async (request, response) => {
  const body = request.body
  const newReview = new Review(body)
  try {
    await newReview.save()
    response.status(201).json(newReview)
  } catch (err) {
    response.status(409).json({ message: err.message})
  }
}

export const updateReview = async (request, response) => {
  const { id } = request.params
  const review = request.body

  if (mongoose.Types.ObjectId.isValid(id)) {
    try {
      const updatedReview = await Review.findByIdAndUpdate({_id: id},  { ...review, _id: id } , { new: true } )
      response.json(updatedReview)
    } catch (err) {
      response.status(409).json({ message: err.message})
    }
  } else {
    return response.status(404).send('There is no review with that id')
  }
}

export const deleteReview = async (request, response) => {
  const { id } = request.params

  if (mongoose.Types.ObjectId.isValid(id)) {
    try {
      await Review.findByIdAndRemove({_id: id})
      response.json({ message: 'Review deleted successfully' })
    } catch (err) {
      response.status(409).json({ message: err.message})
    }
  } else {
    return response.status(404).send('There is no review with that id')
  }
}