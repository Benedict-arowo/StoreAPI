const express = require('express')
const { test } = require('../controllers/products')
const Router = express.Router()

Router.route('/').get(test)


module.exports = Router