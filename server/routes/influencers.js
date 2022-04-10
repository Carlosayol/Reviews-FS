import express from 'express'

import { getInfluencers, createInfluencer, updateInfluencer } from '../controllers/influencers.js'

const router = express.Router()

router.get('/', getInfluencers)
router.post('/', createInfluencer)
router.patch('/:id', updateInfluencer )

export default router