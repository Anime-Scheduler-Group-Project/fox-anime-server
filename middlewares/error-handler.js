module.exports = (err, req, res, next) => {
  console.error(err)
  console.log(err.name)

  let message
  let status
  switch (err.name) {
    case 'JsonWebTokenError':
    case 'AuthError':
      status = 400
      message = ['User is not authenticated']
      break
    case 'LoginError':
      status = 400
      message = ['Invalid email or password']
      break
    case 'EmptyLoginError':
      status = 400
      message = ['Email or password cannot be empty']
      break
    case 'MinusNumberError':
      status = 400
      message = ['Number must be greater than 0']
      break
    case 'SequelizeValidationError':
    case 'SequelizeUniqueConstraintError':
      message = err.errors.map((e) => e.message)
      status = 400
      break
    default:
      message = ['internal server error']
      status = 500
      break
  }
  res.status(status).json({ message })
}
