const jwt = require('jsonwebtoken')
const { namedError } = require('../helpers/error-formatter')
const { User } = require('../models')

module.exports = async (req, res, next) => {
  try {
    const authError = namedError('AuthError')

    const { access_token } = req.headers
    if (!access_token) throw authError

    const parsed = await jwt.verify(access_token, process.env.JWT_SECRET)
    if (!parsed) throw authError

    const { id, email } = parsed
    if (!id || !email) throw authError

    const user = User.findOne({ where: { id, email } })
    if (!user) throw authError

    next()
  } catch (error) {
    next(error)
  }
}
