const express = require('express')
const { getProducts, getProduct } = require('../controllers/products')
const Router = express.Router()

Router.route('/').get(getProducts)
Router.route('/:productID').get(getProduct)


module.exports = Router