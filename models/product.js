const mongoose = require('mongoose')
require('dotenv').config()
const productsModel = mongoose.model(
  'products',
  new mongoose.Schema({
    name: {
      type: String,
      required: [true, 'Product name is required.'],
      minLength: [4, 'Name is too short.'],
      maxLength: [32, 'Name is too long.'],
      unique: [true, 'Name already exists.'],
      trim: true,
    },
    price: {
      type: Number,
      required: [true, 'Product price is required.'],
    },
    company: {
      type: String,
      enum: {
        values: ['ikea', 'liddy', 'caressa', 'marcos'],
        message: '{VALUE} is not supported',
      },
      required: [true, 'Product company is required.'],
    },
    rating: {
      type: Number,
      default: 4.5,
    },
    featured: {
      type: Boolean,
      default: false,
    },
    createdAt: {
      type: Date,
      default: Date.now(),
    },
  })
)

module.exports = productsModel
