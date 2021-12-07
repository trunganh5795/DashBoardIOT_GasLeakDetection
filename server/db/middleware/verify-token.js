const jwt = require('jsonwebtoken')
const { SECRET_KEY } = require('../../config/config')
let authenticate = (req, res, next) => {
    try {
        let decodeToken = jwt.verify(req.headers.authorization, SECRET_KEY)
        req.decodeToken = decodeToken
        next()
    } catch (error) {
        return next({ code: 401, msg: 'not authorized' })
    }
}
let authorize = (role) => {
    return async (req, res, next) => {
        let { role } = req.decodeToken;
        if (role === "user") {
            return next();
        } else {
            return next({ code: 401, msg: 'not authorized' })
        }

    }
}
module.exports = {
    authenticate, authorize
}