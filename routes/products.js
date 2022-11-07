const express = require('express');
const {
  getProducts,
  getProduct,
  createProduct,
  deleteProduct,
  editProduct
} = require('../controllers/products');

const Router = express.Router();

Router.route('/').get(getProducts).post(createProduct);
Router.route('/:productID')
  .get(getProduct)
  .delete(deleteProduct)
  .patch(editProduct);

module.exports = Router;
