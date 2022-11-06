const ErrorHandler = (err, req, res, next) => {
    // Need to handle error made from customError Class
    res.status(400).json({err: err.message}) 
}

module.exports = ErrorHandler