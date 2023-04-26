const JWT = require('jsonwebtoken')

// Protected Routes token based.
const requireSignIn = async (req, res, next) => {
    try {
        const decode = JWT.verify(req.headers.authorization, process.env.JWT)
        next()
    } catch (error) {
        console.log(error);
    }
}

module.exports = requireSignIn;