const asyncWrapper = require('../middleware/asyncWrapper')

const test = asyncWrapper((req, res, next) => {
    res.json({msg: 'howdy!'})
})

module.exports = { test }