class ErrorCreator extends Error {
    constructor(msg, code) { // Creates error with error statuses.
        super(msg)
        this.code = code
    }
}

const setError = (msg, code) => { // Creates an instance of the ErrorCreator class and returns it
    return new ErrorCreator(msg, code)
}

module.exports = { ErrorCreator, setError }