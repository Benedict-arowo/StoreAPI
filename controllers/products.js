const asyncWrapper = require('../middleware/asyncWrapper')
const productsModel = require('../models/product')
require('dotenv').config()

const getProducts = asyncWrapper(async (req, res, next) => {
    let { fields, name, limit, featured, company, sort, numericFilters } = req.query
    const products = productsModel.find({}) 

    if (fields) {
        fields = fields.split(',').join(' ') // Removes the commas, and replaces it with spaces so it can be passed into the select method.
        products.select(fields)
    }

    if (name) {
        name = new RegExp(`.*${name}.*`, 'i') // Returns anything that matches the given "name", case insensitive
        products.find({ name: name })
    }

    if (sort) {
        sort = sort.split(',').join(' ') // Returns "name price" when given "name,price" 
        products.sort(sort)
    }
    else {
        products.sort('createdAt') // By default the products are sorted by when they're created.
    }

    // Limits, default limit is 10, and higest possible limit is 50
    if (limit) {
        limit = Number(limit)
        if (limit > 50) {
            throw Error('Limit is higher than 50')
        }
        products.limit(limit)
    }    
    else {
        products.limit(10)
    }

    if (featured) { 
        featured = featured.toLowerCase()
        products.find({featured: featured === 'true' || featured === 't' ? true : false})
    }

    if (company) {
        // Checks if an invalid company has been given
        if (!process.env.COMPANY_LIST.includes(company)){
            throw new Error('Company not supported.')
        }
        products.find({ company: company })
    }

    let result = await products
    res.json({amount: result.length, result}).status(200)
})

const getProduct = asyncWrapper(async (req, res, next) => {
    const { productID } = req.params
    let { fields } = req.query
    const product = productsModel.findById(productID)

    if (fields) {
        fields = fields.split(',').join(' ') // Removes the commas, and replaces it with spaces so it can be passed into the select method.
        product.select(fields)
    }

    result = await product
    res.json(result).status(200)
})

module.exports = { getProducts, getProduct }