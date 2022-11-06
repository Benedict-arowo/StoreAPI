const express = require('express')
const { getProducts, getProduct, createProduct, deleteProduct } = require('../controllers/products')
const Router = express.Router()

Router.route('/').get(getProducts).post(createProduct)
Router.route('/:productID').get(getProduct).delete(deleteProduct)

module.exports = Router
