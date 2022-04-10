import mongoose from "mongoose"
import Influencer from "../models/influencers.js"

export const getInfluencers = async (request, response) => {
  try {
    const influencers = await Influencer.find()
    response.status(200).json(influencers)
  } catch (err) {
    response.status(404).json({ message: err.message})
  }
}

export const createInfluencer = async (request, response) => {
  const body = request.body
  const newInfluencer = new Influencer(body)
  try {
    await newInfluencer.save()
    response.status(201).json(newInfluencer)
  } catch (err) {
    response.status(409).json({ message: err.message})
  }
}

export const updateInfluencer = async (request, response) => {
  const { id } = request.params
  const influencer = request.body

  if (mongoose.Types.ObjectId.isValid(id)) {
    try {
      const updatedInfluencer = await Influencer.findByIdAndUpdate({_id: id},  { ...influencer, _id: id } , { new: true } )
      response.json(updatedInfluencer)
    } catch (err) {
      response.status(409).json({ message: err.message})
    }
  } else {
    return response.status(404).send('There is no influencer with that id')
  }
}

export const deleteInfluencer = async (request, response) => {
  const { id } = request.params

  if (mongoose.Types.ObjectId.isValid(id)) {
    try {
      await Influencer.findByIdAndRemove({_id: id})
      response.json({ message: 'Influencer deleted successfully' })
    } catch (err) {
      response.status(409).json({ message: err.message})
    }
  } else {
    return response.status(404).send('There is no influencer with that id')
  }
}