import express from 'express'

import { getInfluencers, createInfluencer, updateInfluencer, deleteInfluencer } from '../controllers/influencers.js'

const router = express.Router()

router.get('/', getInfluencers)
router.post('/', createInfluencer)
router.patch('/:id', updateInfluencer)
router.delete('/:id', deleteInfluencer)

export default router