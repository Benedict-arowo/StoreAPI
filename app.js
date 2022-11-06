const express = require('express')
require('dotenv').config()
const morgan = require('morgan')
const connectDB = require('./db/connectDB')
const errorHandler = require('./middleware/error-handler')
const productRouter = require('./routes/products')

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use('/api/v1/products', productRouter)
app.use(morgan('dev'))
app.use(errorHandler)

const start = async () => {
  try {
    await connectDB // Tries to connect to database before running to actual server.
    console.log('Successfully connected to Database.')
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`)
    })
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}

start()
