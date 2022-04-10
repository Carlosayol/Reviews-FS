import mongoose from 'mongoose'

const influencerSchema = mongoose.Schema({
  name: String,
  locations: [String],
  tags: [String],
  followerCount: Number,
  image: String,
  createdAt: {
    type: Date,
    default: new Date()
  }
})

const Influencer = mongoose.model('Influencer', influencerSchema)

export default Influencer