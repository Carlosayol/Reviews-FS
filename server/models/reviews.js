import mongoose from 'mongoose'

const reviewSchema = mongoose.Schema({
  name: String,
  tags: [String],
  likes: Number,
  image: String,
  createdAt: {
    type: Date,
    default: new Date()
  }
})

const Review = mongoose.model('Review', reviewSchema)

export default Review