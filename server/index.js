import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'

import influencersRoutes from './routes/influencers.js'

const app = express()

app.use(bodyParser.json({ limit: "30mb", extended: true }))
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }))
app.use(cors())

app.use('/influencers', influencersRoutes)

const CONNECTION_URI = "mongodb+srv://trendik-user:admin1234@cluster0.pyou4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
const PORT = process.env.PORT || 8000

mongoose.connect(CONNECTION_URI)
  .then(() => app.listen(PORT, () => console.log(`Server on port: ${PORT}`)))
  .catch((err) => console.log(err.message))
