const asyncWrapper = (fn) => {
    return async (req, res, next) => {
        try {
            await fn(req, res, next) // Attempts to run the function and if it fails, it passes the error to the error handler
        } catch (error) {
            next(error)
        }
    }
}

module.exports = asyncWrapper