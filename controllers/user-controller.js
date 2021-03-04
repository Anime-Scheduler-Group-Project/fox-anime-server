const { User } = require('../models')

const { namedError } = require('../helpers/error-formatter')

class UserController {
  static register = async (req, res, next) => {
    try {
      const { id, email } = req.body
      await User.create(req.body)
      res.status(201).json({ id, email })
    } catch (error) {
      next(error)
    }
  }
  static login = async (req, res, next) => {
    try {
      const { email, password } = req.body
      if (!email || !password) throw namedError('EmptyLoginError')
      const user = await User.findOne({ where: { email } })
      if (!user) throw namedError('LoginError')
      if (!user.comparePassword(password)) throw namedError('LoginError')
      const access_token = user.toJwt()
      res.status(200).json({ access_token })
    } catch (error) {
      next(error)
    }
  }
}

module.exports = { UserController }
