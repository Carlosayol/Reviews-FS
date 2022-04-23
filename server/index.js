import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'
import influencersRoutes from './routes/influencers.js'

const app = express()
dotenv.config()

app.use(bodyParser.json({ limit: "30mb", extended: true }))
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }))
app.use(cors())

app.use('/influencers', influencersRoutes)

app.get('/', (request, response) => {
  response.send("Hello to this API")
})

const PORT = process.env.PORT || 8000

mongoose.connect(process.env.CONNECTION_URL)
  .then(() => app.listen(PORT, () => console.log(`Server on port: ${PORT}`)))
  .catch((err) => console.log(err.message))
